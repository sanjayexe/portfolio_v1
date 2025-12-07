import React from "react";
import { portfolioData } from "../data/portfolioData.jsx";

const Footer = () => (
  <footer className="theme-bg-secondary py-8 px-6 sm:px-8 lg:px-12 border-t theme-border">
    <div className="max-w-7xl mx-auto text-center theme-text-muted">
      <p className="text-body">
        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
