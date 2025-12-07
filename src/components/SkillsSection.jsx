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

const SkillCard = ({ skill }) => (
  <div className="w-full h-full p-6 theme-bg-secondary/80 backdrop-blur-sm border theme-border rounded-2xl flex flex-col items-center justify-center gap-4 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-accent-primary/10 hover:border-accent-primary/30">
    <div className="p-3 rounded-full theme-bg-secondary/50 backdrop-blur-sm border theme-border">
      <div className="scale-125">{skill.icon}</div>
    </div>
    <span className="theme-text-primary font-semibold text-body">
      {skill.name}
    </span>
  </div>
);

const SkillsSection = () => (
  <Section id="skills" title="My Skills" className="theme-bg-secondary/20 py-20">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {Object.entries(portfolioData.skills).map(([category, skills]) => (
        <div key={category} className="space-y-10">
          <h3 className="text-2xl font-bold text-center theme-text-primary mb-2 capitalize">
            {category
              .replace(/([A-Z])/g, " $1")
              .replace("And Others", "& Others")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default SkillsSection;
