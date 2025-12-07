import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ExperienceEducationSection from "./components/ExperienceEducationSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import Chatbot from "./components/Chatbot.jsx";
import Modal from "./components/Modal.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";
import { portfolioData } from "./data/portfolioData.jsx";

const App = () => {
  const [activeSection, setActiveSection] = React.useState("home");
  const sectionRefs = React.useRef({});
  const [modalState, setModalState] = React.useState({
    isOpen: false,
    content: "",
    isLoading: false,
    title: "",
  });
  const [clipboardStatus, setClipboardStatus] = React.useState("Copy");

  const handleGenerateSnippet = async (project) => {
    setModalState({
      isOpen: true,
      isLoading: true,
      content: "",
      title: `✨ AI Snippet for "${project.title}"`,
    });
    setClipboardStatus("Copy");

    const systemPrompt = `You are a professional career coach and an expert in technical recruitment. Your task is to help Sanjay T write a cover letter.
        Based on the following project information, write a concise and impactful paragraph (2-4 sentences) that Sanjay T can use in a cover letter to highlight his skills and accomplishments from this project.
        
        Instructions:
        - The tone should be professional, confident, and achievement-oriented.
        - Start with an action verb.
        - Clearly connect the project work to valuable skills (e.g., "Developed a full-stack application..., demonstrating my proficiency in the MERN stack.").
        - Quantify results if possible (even if you have to logically infer a business outcome, like "improving user engagement" or "streamlining a process").
        - The output should be a single paragraph of text. Do not use markdown or bullet points.
        
        Sanjay's Portfolio Data is provided for context on his overall profile:
        ${JSON.stringify(portfolioData, null, 2)}
        
        Now, generate the paragraph for this specific project:
        Project Title: ${project.title}
        Description: ${project.description}
        Technologies Used: ${project.technologies.join(", ")}
        `;

    const payload = {
      contents: [{ parts: [{ text: `Generate the cover letter snippet.` }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const apiKey = ""; // Canvas will provide
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok)
        throw new Error(`API call failed with status: ${response.status}`);

      const result = await response.json();
      const botResponseText =
        result.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a snippet at this time.";
      setModalState((prev) => ({
        ...prev,
        content: botResponseText,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error calling Gemini API for snippet:", error);
      setModalState((prev) => ({
        ...prev,
        content: "There was an error generating the snippet. Please try again.",
        isLoading: false,
      }));
    }
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, content: "", isLoading: false, title: "" });
  };

  const handleCopyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = modalState.content;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setClipboardStatus("Copied!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setClipboardStatus("Failed!");
    }
    document.body.removeChild(textArea);
    setTimeout(() => setClipboardStatus("Copy"), 2000);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => {
      if (section.id) sectionRefs.current[section.id] = section;
      observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="theme-bg-primary theme-text-primary font-sans leading-normal tracking-tight min-h-screen">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <ThemeSwitcher />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection onGenerateSnippet={handleGenerateSnippet} />
          <ExperienceEducationSection />
          <ContactSection />
        </main>
        <Footer />
        <Chatbot />
        <Modal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          title={modalState.title}
        >
          {modalState.isLoading ? (
            <div className="flex items-center justify-center h-24">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse-slow [animation-delay:-0.3s]"></span>
                <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse-slow [animation-delay:-0.15s]"></span>
                <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse-slow"></span>
              </div>
            </div>
          ) : (
            <div>
              <p className="theme-text-primary text-body-large whitespace-pre-wrap mb-6">
                {modalState.content}
              </p>
              <button
                onClick={handleCopyToClipboard}
                className="w-full theme-bg-secondary theme-text-primary font-bold py-3 px-6 rounded-lg hover:theme-bg-tertiary transition-colors duration-300 text-body"
              >
                {clipboardStatus}
              </button>
            </div>
          )}
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default App;
