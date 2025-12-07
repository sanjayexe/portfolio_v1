import React from "react";
import { portfolioData } from "../data/portfolioData.jsx";

const Section = ({ id, title, children, className = "" }) => (
  <section
    id={id}
    className={`py-20 md:py-32 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 fade-in ${className}`}
  >
    <div className="w-full">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-14 text-center theme-text-primary relative">
        {title}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-teal-400 rounded-full"></span>
      </h2>
      {children}
    </div>
  </section>
);

const TimelineItem = ({ item }) => (
  <div className="relative pl-8 sm:pl-12 py-4 group">
    <div className="absolute left-0 sm:left-2 top-4 h-full w-0.5 bg-slate-300 dark:bg-slate-600 group-hover:bg-teal-400 transition-colors duration-300"></div>
    <div className="absolute left-[-5px] sm:left-[3px] top-4 w-4 h-4 rounded-full bg-teal-500 dark:bg-teal-400 border-4 border-white dark:border-slate-800 group-hover:bg-teal-300 group-hover:scale-110 transition-all duration-300"></div>
    <p className="relative z-10 text-teal-600 dark:text-teal-400 font-semibold text-lg mb-1">{item.duration}</p>
    <h3 className="relative z-10 font-bold text-2xl md:text-3xl theme-text-primary">{item.title}</h3>
    <p className="relative z-10 text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium">{item.subtitle}</p>
    {item.description && (
      <p className="relative z-10 text-slate-600 dark:text-slate-400 mt-2 text-base md:text-lg font-medium">{item.description}</p>
    )}
  </div>
);

const ExperienceEducationSection = () => (
  <Section
    id="experience"
    title="Career & Education"
    className="theme-bg-secondary/30"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-center theme-text-primary mb-10">
          Experience
        </h3>
        <div className="relative">
          {portfolioData.experience.map((exp, index) => (
            <TimelineItem
              key={index}
              item={{ ...exp, title: exp.role, subtitle: exp.company }}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-center theme-text-primary mb-10">
          Education
        </h3>
        <div className="relative">
          {portfolioData.education.map((edu, index) => (
            <TimelineItem
              key={index}
              item={{
                ...edu,
                title: edu.degree,
                subtitle: edu.institution,
                description: edu.grade,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default ExperienceEducationSection;
