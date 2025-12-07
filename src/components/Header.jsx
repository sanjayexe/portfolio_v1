import React from "react";
import { MenuIcon, XIcon } from "./Icons.jsx";

const Header = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 theme-bg-secondary/90 backdrop-blur-sm shadow-lg border-b theme-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={() => scrollToSection("home")}
              className="text-3xl font-bold theme-text-primary tracking-wider hover:theme-accent transition-colors duration-300"
            >
              Sanjay<span className="theme-accent">.</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => scrollToSection(link)}
                className={`capitalize font-semibold transition-all duration-300 px-4 py-3 rounded-lg text-body ${
                  activeSection === link
                    ? "theme-bg-tertiary theme-accent"
                    : "theme-text-secondary hover:theme-accent hover:theme-bg-tertiary"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="theme-text-secondary hover:theme-accent p-2"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } theme-bg-secondary border-t theme-border`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => scrollToSection(link)}
              className={`block px-4 py-3 rounded-lg text-body font-medium capitalize transition-colors duration-300 ${
                activeSection === link
                  ? "theme-bg-tertiary theme-accent"
                  : "theme-text-secondary hover:theme-bg-tertiary hover:theme-accent"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
