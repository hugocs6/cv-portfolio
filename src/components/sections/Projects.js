'use client';

import { Github, Globe, Lock, Terminal } from 'lucide-react';
import Image from 'next/image';

const ProjectCard = ({ title, description, image, technologies, links, type, darkMode }) => {
  return (
    <div className={`
      rounded-xl overflow-hidden transition-all duration-300
      ${darkMode ? 'bg-gray-800' : 'bg-white'}
      hover:shadow-xl transform hover:-translate-y-1
      border ${darkMode ? 'border-gray-700' : 'border-gray-200'}
    `}>
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            {type === 'security' ? (
              <Lock className={`w-12 h-12 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            ) : (
              <Terminal className={`w-12 h-12 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`
                px-3 py-1 rounded-full text-sm
                ${darkMode 
                  ? 'bg-gray-700 text-gray-300 border-gray-600' 
                  : 'bg-gray-100 text-gray-700 border-gray-200'
                }
                border
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 text-sm
                ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}
                transition-colors duration-300
              `}
            >
              <Github className="w-4 h-4" />
              <span>Code source</span>
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center gap-2 text-sm
                ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}
                transition-colors duration-300
              `}
            >
              <Globe className="w-4 h-4" />
              <span>Démo live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ isVisible, darkMode }) => {
  const projects = [
    {
      title: "Analyseur de Vulnérabilités",
      description: "Outil d'analyse automatisée des vulnérabilités dans les applications web. Développé dans le cadre de mes études en cybersécurité.",
      technologies: ["Python", "SQLite", "Docker", "API REST"],
      type: "security",
      links: {
        github: "https://github.com/username/vulnerability-analyzer"
      }
    },
    {
      title: "Système de Monitoring Réseau",
      description: "Application de surveillance réseau en temps réel avec détection d'anomalies et alertes automatiques.",
      technologies: ["Java", "Spring Boot", "MongoDB", "WebSocket"],
      type: "security",
      links: {
        github: "https://github.com/username/network-monitor",
        demo: "https://demo-monitor.example.com"
      }
    },
    {
      title: "Portfolio CV",
      description: "Site web personnel présentant mon parcours et mes compétences, développé avec Next.js et Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      type: "web",
      links: {
        github: "https://github.com/username/portfolio",
        demo: "https://portfolio.example.com"
      }
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="space-y-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;