import {
  ReactIcon,
  JavaScriptIcon,
  TailwindIcon,
  CodeIcon,
  NodeJSIcon,
  JavaIcon,
  MongoDBIcon,
  DatabaseIcon,
  GithubIcon,
  FigmaIcon,
} from "../components/Icons.jsx";
import profileImage from "./profileImage.jpg";
// --- PORTFOLIO DATA FROM RESUME --- //
export const portfolioData = {
  name: "Sanjay T",
  title: "Full Stack Web Developer | Java Enthusiast | AI/ML",
  profileImage: profileImage,
  location: "Erode",
  email: "sanjay.jay18v@gmail.com",
  phone: "+91 9345748085",
  profiles: {
    github: "https://github.com/Sanjayexe",
    linkedin: "https://linkedin.com/in/Sanjay-dev", // Assuming LinkedIn based on resume handle
  },
  summary:
    "MSc in Software Systems graduate with expertise in front-end and back-end development. Friendly, collaborative, and skilled in leadership, delivering innovative and efficient web solutions.",
  skills: {
    frontend: [
      { name: "ReactJS", icon: <ReactIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "Bootstrap5", icon: <CodeIcon /> },
    ],
    backend: [
      { name: "Node JS", icon: <NodeJSIcon /> },
      { name: "Express JS", icon: <CodeIcon /> },
      { name: "PHP", icon: <CodeIcon /> },
    ],
    programmingLanguages: [
      { name: "Java", icon: <JavaIcon /> },
      { name: "C, C++", icon: <CodeIcon /> },
      { name: "C#", icon: <CodeIcon /> },
    ],
    databases: [
      { name: "MongoDB", icon: <MongoDBIcon /> },
      { name: "PostgreSQL", icon: <DatabaseIcon /> },
      { name: "MySQL", icon: <DatabaseIcon /> },
    ],
    toolsAndOthers: [
      { name: "Git/Github", icon: <GithubIcon /> },
      { name: "Figma", icon: <FigmaIcon /> },
      { name: "Flutter", icon: <CodeIcon /> },
    ],
  },
  experience: [
    {
      company: "Twincord",
      role: "FullStack Developer",
      duration: "Dec 2024 - Jan 2025",
      description:
        "Contributed to the development of web applications as a full-stack developer, gaining hands-on experience with modern technologies.",
    },
    {
      company: "Corizo",
      role: "Intern",
      duration: "Internship Period",
      description:
        "Completed an internship program, enhancing skills in software development and teamwork.",
    },
  ],
  projects: [
   
    {
      title: "Destiny Dive",
      imageUrl: "https://placehold.co/600x400/1e293b/475569?text=Destiny+Dive",
      description:
        "A MERN stack application featuring user authentication (Google OAuth + local), college/university search with advanced filtering, and a scholarship application system with PDF generation. Includes a responsive admin interface for managing applications.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Bootstrap",
      ],
      githubLink: "https://github.com/sanjayexe/destiny_dive",
      liveLink: "https://destiny-dive.vercel.app/",
    },
     {
      title: "JDBC Jewellery Shop",
      imageUrl: "https://placehold.co/600x400/1e293b/475569?text=JDBC+Jewellery+Shop",
      description:
        "A Java-based desktop application for jewellery shop management using JDBC and MySQL. Features include product catalog management, customer details, billing, and sales tracking with a user-friendly Swing GUI.",
      technologies: [
        "Java",
        "JDBC",
        "MySQL",
        "Object-Oriented Programming"
      ],
      githubLink: "https://github.com/sanjayexe/JAVA_JDBC_JewelleryShop",
      liveLink: null,
    },
    {
      title: "Stock Market Prediction",
      imageUrl:
        "https://placehold.co/600x400/1e293b/475569?text=Stock+Prediction",
      description:
        "Developed a stock price prediction website using Python, TensorFlow, and Plotly. Implemented deep learning models (LSTMs/Neural Networks) to analyze historical data, with real-time search and interactive visualizations.",
      technologies: ["Python", "TensorFlow", "Plotly", "Deep Learning"],
      githubLink: "https://github.com/sanjayexe/Stock_Market_Prediction",
      liveLink: null,
    },
  ],
  education: [
    {
      institution: "Kongu Engineering College",
      degree: "M.Sc in Software Systems",
      duration: "Ends March 2027",
      grade: "7.65 CGPA",
    },
    {
      institution: "Kongu Kalvi Nilayam Hr.Sec School",
      degree: "Hr.sec in Computer Science",
      duration: "March 2022",
      grade: "83%",
    },
    {
      institution: "Kongu Kalvi Nilayam Hr.Sec School",
      degree: "SSLC",
      duration: "March 2020",
      grade: "75%",
    },
  ],
  interests: ["Web Development", "App Development", "AI/ML"],
  languages: ["Tamil", "English"],
};
