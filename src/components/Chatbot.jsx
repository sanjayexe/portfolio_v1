import React from "react";
import { SparklesIcon, XIcon, SendIcon } from "./Icons.jsx";
import { portfolioData } from "../data/portfolioData.jsx";

const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      sender: "bot",
      text: "Hi! I'm Sanjay's AI assistant. Ask me anything about his skills or projects.",
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const chatBoxRef = React.useRef(null);

  React.useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInputValue("");
    setIsLoading(true);

    const systemPrompt = `You are a friendly and professional AI assistant for Sanjay T's portfolio. Your purpose is to answer questions from visitors, like recruiters, about Sanjay's skills, projects, and experience.
        - Base your answers STRICTLY on the following JSON data about Sanjay. Do not make up any information.
        - If a question is asked that cannot be answered from the provided data (e.g., "What is his favorite color?"), politely decline to answer, stating that you only have information related to his professional profile.
        - Keep your answers concise and to the point.
        - When asked about projects, mention the technologies used and provide the live/GitHub links if available.
    
        Sanjay's Portfolio Data:
        ${JSON.stringify(portfolioData, null, 2)}
        
        Current conversation:
        ${messages.map(m => `${m.sender === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n')}
        `;

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/satvikag/chatbot",
        {
          method: "POST",
          headers: { 
            "Authorization": "Bearer hf_wVbRlZQYqgYbLfQdQJpUYxXvXyZ",
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({
            inputs: [
              {
                "role": "system",
                "content": systemPrompt
              },
              {
                "role": "user",
                "content": userMessage
              }
            ],
            parameters: {
              max_new_tokens: 500,
              temperature: 0.7,
              return_full_text: false
            }
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      const botResponseText = result[0]?.generated_text?.trim() || 
        "I'm sorry, I couldn't generate a response. Please try again.";
      
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponseText },
      ]);
    } catch (error) {
      console.error("Error calling AI model:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I'm having trouble connecting to the AI service. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div
        className={`fixed bottom-0 right-0 m-6 transition-transform duration-300 ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-teal-500 text-white rounded-full p-4 shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500 transform hover:scale-110 transition-transform"
        >
          <SparklesIcon className="w-8 h-8" />
        </button>
      </div>

      <div
        className={`fixed bottom-0 right-0 mb-6 mr-6 md:mb-8 md:mr-8 z-50 w-[calc(100%-3rem)] max-w-sm h-[70vh] max-h-[600px] transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl h-full flex flex-col border border-slate-700">
          <header className="flex items-center justify-between p-4 border-b border-slate-700">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-teal-400" /> AI Assistant
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <XIcon />
            </button>
          </header>
          <div
            ref={chatBoxRef}
            className="flex-1 p-4 space-y-4 overflow-y-auto"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-sm rounded-xl px-4 py-2 ${
                    msg.sender === "user"
                      ? "bg-teal-500 text-white"
                      : "bg-slate-700 text-slate-200"
                  }`}
                >
                  <p
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(/\n/g, "<br />"),
                    }}
                  ></p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 text-slate-200 rounded-xl px-4 py-2">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse-slow [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse-slow [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse-slow"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t border-slate-700"
          >
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about my projects..."
                className="w-full bg-slate-700 text-white rounded-full py-2 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-500 text-white rounded-full p-2 hover:bg-teal-600 disabled:bg-slate-600 transition"
                disabled={isLoading || !inputValue}
              >
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chatbot;
