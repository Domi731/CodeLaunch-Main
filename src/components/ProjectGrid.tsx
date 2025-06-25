
import React from 'react';
import { ExternalLink, Github, Star, Code } from 'lucide-react';

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'Eine moderne Wetterapp mit Vorhersagen und interaktiven Karten',
      image: '/placeholder.svg',
      tags: ['React', 'TypeScript', 'API'],
      stars: 23,
      demoUrl: 'https://example.com/weather',
      githubUrl: 'https://github.com/domi731/weather-app'
    },
    {
      id: 2,
      title: 'Smart Todo List',
      description: 'Intelligente Aufgabenverwaltung mit KI-gestützten Empfehlungen',
      image: '/placeholder.svg',
      tags: ['Vue.js', 'Node.js', 'AI'],
      stars: 17,
      demoUrl: 'https://example.com/todo',
      githubUrl: 'https://github.com/domi731/smart-todo'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive Portfolio mit animierten Übergängen und Projekten',
      image: '/placeholder.svg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      stars: 31,
      demoUrl: 'https://example.com/portfolio',
      githubUrl: 'https://github.com/domi731/portfolio'
    },
    {
      id: 4,
      title: 'Scientific Calculator',
      description: 'Erweiterte Berechnungen mit graphischer Darstellung',
      image: '/placeholder.svg',
      tags: ['JavaScript', 'Canvas', 'Math'],
      stars: 12,
      demoUrl: 'https://example.com/calculator',
      githubUrl: 'https://github.com/domi731/calculator'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time Chat mit Rooms und File-Sharing',
      image: '/placeholder.svg',
      tags: ['Socket.io', 'Express', 'MongoDB'],
      stars: 44,
      demoUrl: 'https://example.com/chat',
      githubUrl: 'https://github.com/domi731/chat-app'
    },
    {
      id: 6,
      title: 'Code Playground',
      description: 'Online-Editor für HTML, CSS und JavaScript',
      image: '/placeholder.svg',
      tags: ['Monaco', 'Webpack', 'Sandbox'],
      stars: 28,
      demoUrl: 'https://example.com/playground',
      githubUrl: 'https://github.com/domi731/code-playground'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meine <span className="bg-gradient-launch bg-clip-text text-transparent">Projekte</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Eine Sammlung meiner Softwareprojekte – von Web-Apps bis zu Tools. 
            Jedes Projekt kann direkt gestartet und getestet werden.
          </p>
        </div>

        {/* Search Bar (Placeholder for future functionality) */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Projekte durchsuchen..."
              className="w-full bg-tech-gray border border-gray-700 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:border-launch-blue focus:outline-none transition-colors duration-300"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <div className="flex items-center gap-1 text-gray-400">
                  <Star size={16} />
                  <span className="text-sm">{project.stars}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-launch-blue text-sm rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-launch text-white text-center py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  <ExternalLink size={16} />
                  Starten
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-launch-blue hover:text-launch-blue transition-all duration-300 flex items-center justify-center"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
