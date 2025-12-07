import React from "react";
import { portfolioData } from "../data/portfolioData.jsx";
import { GithubIcon, ExternalLinkIcon, SparklesIcon } from "./Icons.jsx";

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

const ProjectCard = ({ project, onGenerateSnippet }) => (
  <div className="theme-bg-secondary/80 backdrop-blur-sm border theme-border rounded-2xl overflow-hidden shadow-lg hover:theme-shadow transition-all duration-300 transform hover:-translate-y-3 flex flex-col h-full">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-56 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/600x400/1e293b/475569?text=Image+Not+Found";
      }}
    />
    <div className="card-padding flex-grow flex flex-col">
      <h3 className="text-card-title theme-text-primary mb-4">
        {project.title}
      </h3>
      <p className="theme-text-secondary text-body mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="theme-bg-tertiary theme-accent text-sm font-semibold px-4 py-2 rounded-full"
            style={{ backgroundColor: "var(--accent-primary)", color: "white" }}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-6 border-t theme-border">
        <div className="flex items-center justify-between">
      
          <div className="flex items-center justify-end gap-6">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-text-secondary hover:theme-accent transition-colors duration-300 flex items-center gap-2 text-body"
              >
                <GithubIcon />
                <span className="hidden sm:inline">Code</span>
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-text-secondary hover:theme-accent transition-colors duration-300 flex items-center gap-2 text-body"
              >
                <ExternalLinkIcon />
                <span className="hidden sm:inline">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = ({ onGenerateSnippet }) => (
  <Section id="projects" title="Projects">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {portfolioData.projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          onGenerateSnippet={onGenerateSnippet}
        />
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
