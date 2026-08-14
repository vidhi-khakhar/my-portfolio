import { useEffect, useRef, useState } from 'react';
import Section from './Section';

// Imports (Replace with your actual local image paths)
import portfolioImg from '../assets/portfolio-preview.png'; 
import foodPalImg from '../assets/foodpal-image.png';
import assemblyImg from '../assets/echo-cat.png';
import vattenfallImg from '../assets/vattenfal-project.png';
  
const projectsData = [
  {
    title: "Portfolio Website",
    description: "You're looking at it right now! This is a personal portfolio website built with React, Vite, and Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: null,
    image: portfolioImg,
  },
  {
    title: "VRAAG - Enterprise Trading RAG Platform",
    description: "Designed and built a proof-of-concept RAG solution for Vattenfall's energy trading platform (VHP). Integrated codebase vector indexing, Azure DevOps sprint tracking, and automated documentation flows under the Vattenfall AI Platform (VAIP).",
    tech: ["Azure AI Foundry", "Copilot Studio", "Azure AI Search", "Power Automate", "PowerShell", "RAG"],
    github: null, // Enterprise internal project
    live: null,
    image: vattenfallImg, // Replace with import/path when image is generated
  },
  {
    title: "FoodPal - Recipe Management Application",
    description: "FoodPal is a full-stack Java desktop application to organize and share recipes, allowing users to collaborate via a distributed server built with Spring Boot while managing personal favorites and shopping lists locally through a JavaFX client.",
    tech: ["Java", "JavaFX", "Spring Boot", "REST API", "Maven"],
    github: null,
    live: null,
    image: foodPalImg,
  },
  {
    title: "Echo Cat - An x86 Assembly Game",
    description: "Echo Cat is an Assembly x86-64 spinoff of the Chrome Dinosaur game. It was created for the CSE1400 Computer Organization course at TU Delft with another classmate, Lara-Maria Godonoaga.",
    tech: ["Assembly x86-64", "raylib", "Linux", "Game Development"],
    github: "https://github.com/soulara28/EchoCat",
    live: null,
    image: assemblyImg,
  },
];

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.55 2.87 8.41 6.84 9.77.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.5C19.14 20.66 22 16.81 22 12.26 22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ExternalLinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group bg-slate-900/90 border-2 border-slate-600/80 hover:border-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-2xl h-full">
      
      {/* Top Image Preview Frame — Clean Bright White Background */}
      <div className="p-3 bg-white border-b-2 border-slate-200">
        <div className="w-full h-48 bg-slate-100 rounded-xl overflow-hidden border border-slate-300 relative flex items-center justify-center shadow-inner">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            /* Bright White/Slate Placeholder */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 p-6 relative">
              <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              <span className="font-mono text-xs text-cyan-800 bg-cyan-100 border border-cyan-300 px-3 py-1 rounded-full mb-2 font-semibold">
                &lt;code_preview /&gt;
              </span>
              <span className="text-slate-900 font-bold text-center text-sm px-4 z-10">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 bg-slate-900/50">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3 shrink-0 ml-4 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live site`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Crisp White/Slate Tech Badges */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-white bg-slate-800/90 border border-white/20 rounded-md px-2.5 py-1 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="projects">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold text-white whitespace-nowrap">
          <span className="text-cyan-400">/</span> projects
        </h2>
        <div className="flex-1 h-px bg-slate-700" />
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project, i) => (
          <div
            key={project.title}
            className={`transition-all duration-700 ease-out ${
              hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: hasAnimated ? `${i * 120}ms` : '0ms' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;