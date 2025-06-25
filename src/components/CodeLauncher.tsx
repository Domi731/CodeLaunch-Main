
import React, { useState } from 'react';
import { Play, ChevronDown, ExternalLink } from 'lucide-react';

const CodeLauncher = () => {
  const [selectedProject, setSelectedProject] = useState('weather-app');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = [
    { id: 'weather-app', name: 'Weather Dashboard', url: 'https://example.com/weather' },
    { id: 'todo-list', name: 'Smart Todo List', url: 'https://example.com/todo' },
    { id: 'portfolio', name: 'Portfolio Website', url: 'https://example.com/portfolio' },
    { id: 'calculator', name: 'Scientific Calculator', url: 'https://example.com/calc' },
  ];

  const handleLaunch = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      window.open(project.url, '_blank');
    }
  };

  return (
    <section id="launcher" className="py-20 bg-tech-gray relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-launch bg-clip-text text-transparent">Code Launcher</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Wähle ein Projekt aus und starte es direkt im Browser. 
            Perfekt zum Testen und Vorführen deiner Anwendungen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-tech-dark border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Project Selector */}
              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Projekt auswählen
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left text-white hover:border-launch-blue transition-colors duration-300 flex items-center justify-between"
                  >
                    <span>{projects.find(p => p.id === selectedProject)?.name}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-10">
                      {projects.map((project) => (
                        <button
                          key={project.id}
                          onClick={() => {
                            setSelectedProject(project.id);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {project.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Launch Button */}
              <div className="lg:flex-shrink-0">
                <button
                  onClick={handleLaunch}
                  className="launch-button flex items-center gap-3 text-lg px-8 py-4"
                >
                  <Play size={24} />
                  Launch Project
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <ExternalLink size={16} />
                Das Projekt wird in einem neuen Tab geöffnet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeLauncher;
