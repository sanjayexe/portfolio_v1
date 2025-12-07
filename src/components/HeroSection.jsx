import React from "react";
import resume from "../data/sanjay_resume.pdf"
import { portfolioData } from "../data/portfolioData.jsx";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center theme-bg-primary px-6 sm:px-8 lg:px-12 overflow-hidden pt-20"
  >
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="text-center md:text-left order-2 md:order-1">
        <h1 className="text-hero theme-text-primary tracking-tight">
          Hi, I'm <span className="theme-accent">{portfolioData.name}</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-body-large theme-text-secondary">
          {portfolioData.title}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 sm:gap-4 md:gap-6">
          <a
            href="#projects"
            className="relative group inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-full group hover:scale-105 transition-all duration-300 transform-gpu"
            style={{
              backgroundColor: 'var(--accent-primary)',
              boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <span className="relative z-10 text-white text-base sm:text-body font-semibold">
              View My Work
            </span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#contact"
            className="relative group inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-full border-2 transition-all duration-300 transform-gpu hover:scale-105"
            style={{
              borderColor: 'var(--accent-primary)',
              color: 'var(--text-primary)'
            }}
          >
            <span className="relative z-10 text-body font-semibold group-hover:text-white transition-colors duration-300">
              Get In Touch
            </span>
            <div 
              className="absolute inset-0 w-full h-full bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: 1 }}
            ></div>
          </a>
          
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-full transition-all duration-300 transform-gpu hover:scale-105 bg-white text-gray-900 hover:text-gray-800"
          >
            <span className="relative z-10 text-body font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              View Resume
            </span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96">
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse-slow"></div>
          <img
            src={portfolioData.profileImage}
            alt="Sanjay T"
            className="relative w-full h-full object-cover rounded-full border-4 theme-border shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
