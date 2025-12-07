import React from "react";
import { portfolioData } from "../data/portfolioData.jsx";

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

const AboutSection = () => (
  <Section id="about" title="About Me">
    <div className="text-center max-w-4xl mx-auto">
      <p className="text-body-large theme-text-secondary leading-relaxed">
        {portfolioData.summary}
      </p>
      <div className="mt-12">
        <h3 className="text-card-title theme-text-primary mb-8">
          Core Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {portfolioData.interests.map((interest, index) => (
            <span
              key={index}
              className="theme-bg-secondary theme-text-primary text-body font-semibold px-6 py-4 rounded-xl shadow-lg hover:theme-bg-tertiary transition-all duration-300 transform hover:scale-105"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
