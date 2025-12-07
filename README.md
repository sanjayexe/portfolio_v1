# Sanjay T's Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a sleek dark theme with Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with teal accents and smooth animations
- **Interactive Sections**:
  - Hero section with animated profile image
  - About section with core interests
  - Skills showcase with categorized technologies
  - Project portfolio with live demos and GitHub links
  - Experience and education timeline
  - Contact section with social links
- **AI-Powered Features**:
  - AI chatbot for answering questions about skills and projects
  - AI-generated cover letter snippets for each project
- **Smooth Navigation**: Fixed header with smooth scrolling between sections

## Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **AI Integration**: Google Gemini API (for chatbot and snippet generation)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── Icons.jsx       # SVG icon components
│   ├── Header.jsx      # Navigation header
│   ├── HeroSection.jsx # Landing section
│   ├── AboutSection.jsx # About me section
│   ├── SkillsSection.jsx # Skills showcase
│   ├── ProjectsSection.jsx # Projects portfolio
│   ├── ExperienceEducationSection.jsx # Career timeline
│   ├── ContactSection.jsx # Contact information
│   ├── Footer.jsx      # Footer component
│   ├── Chatbot.jsx     # AI chatbot
│   └── Modal.jsx       # Modal component
├── data/
│   └── portfolioData.js # Portfolio data and configuration
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Customization

### Updating Portfolio Data

Edit `src/data/portfolioData.js` to update:

- Personal information
- Skills and technologies
- Projects and descriptions
- Experience and education
- Contact information

### Styling

The project uses Tailwind CSS for styling. You can:

- Modify colors in `tailwind.config.js`
- Update global styles in `src/index.css`
- Customize component styles in individual component files

### AI Features

To enable AI features (chatbot and snippet generation):

1. Get a Google Gemini API key
2. Add the API key to the respective components in `src/components/Chatbot.jsx` and `src/App.jsx`

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Use the `gh-pages` package or GitHub Actions

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: sanjay.jay18v@gmail.com
- **GitHub**: [@Sanjayexe](https://github.com/Sanjayexe)
- **LinkedIn**: [Sanjay-dev](https://linkedin.com/in/Sanjay-dev)
