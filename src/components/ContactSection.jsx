import React from "react";
import { portfolioData } from "../data/portfolioData.jsx";
import { GithubIcon } from "./Icons.jsx";

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`section-padding fade-in ${className}`}>
    <div className="max-w-7xl mx-auto">
      <h2 className="text-section-title theme-text-primary mb-16 text-center relative">
        {title}
        <span
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 theme-accent rounded-full"
          style={{ backgroundColor: "var(--accent-primary)" }}
        ></span>
      </h2>
      {children}
    </div>
  </section>
);

const ContactSection = () => (
  <Section id="contact" title="Contact Me">
    <div className="max-w-2xl mx-auto text-center">
      <p className="theme-text-secondary text-body-large mb-12 leading-relaxed">
        Have a project in mind or just want to say hi? I'm always open to
        discussing new projects and opportunities.
      </p>
      <a
        href={`mailto:${portfolioData.email}`}
        className="inline-block text-white font-bold py-4 px-12 rounded-full hover:opacity-90 transition-all duration-300 text-body mb-12 theme-shadow transform hover:scale-105"
        style={{ backgroundColor: "var(--accent-primary)" }}
      >
        Say Hello
      </a>
      <div className="flex justify-center space-x-8">
        <a
          href={portfolioData.profiles.github}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-text-secondary hover:theme-accent transition-colors duration-300 transform hover:scale-125 p-3"
        >
          <GithubIcon />
        </a>
        <a
          href={portfolioData.profiles.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-text-secondary hover:theme-accent transition-colors duration-300 transform hover:scale-125 p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </div>
  </Section>
);

export default ContactSection;
