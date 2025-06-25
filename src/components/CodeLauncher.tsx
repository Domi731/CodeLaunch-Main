
import React, { useState } from 'react';
import { Play, Code, ExternalLink } from 'lucide-react';

const CodeLauncher = () => {
  const [selectedProject, setSelectedProject] = useState('');
  
  const launchableProjects = [
    { 
      id: 'weather-dashboard', 
      name: 'Weather Dashboard', 
      url: 'https://weather-dashboard-domi.vercel.app',
      description: 'Wetterapp mit Live-Daten'
    },
    { 
      id: 'smart-todo', 
      name: 'Smart Todo List', 
      url: 'https://smart-todo-domi.netlify.app',
      description: 'KI-gestützte Aufgabenverwaltung'
    },
    { 
      id: 'portfolio', 
      name: 'Portfolio Website', 
      url: 'https://domi731.github.io/portfolio',
      description: 'Responsive Portfolio'
    },
    { 
      id: 'calculator', 
      name: 'Scientific Calculator', 
      url: 'https://calculator-domi.surge.sh',
      description: 'Erweiterte Berechnungen'
    },
    { 
      id: 'chat-app', 
      name: 'Chat Application', 
      url: 'https://chat-app-domi.herokuapp.com',
      description: 'Real-time Chat'
    },
    { 
      id: 'code-playground', 
      name: 'Code Playground', 
      url: 'https://code-playground-domi.vercel.app',
      description: 'Online Code-Editor'
    },
    { 
      id: 'ecommerce', 
      name: 'E-Commerce Store', 
      url: 'https://shop-domi.vercel.app',
      description: 'Online-Shop mit Bezahlung'
    },
    { 
      id: 'music-player', 
      name: 'Music Player', 
      url: 'https://music-player-domi.netlify.app',
      description: 'Web-Musikplayer'
    },
    { 
      id: 'task-manager', 
      name: 'Task Manager', 
      url: 'https://taskmanager-domi.web.app',
      description: 'Kanban-Board'
    },
    { 
      id: 'crypto-dashboard', 
      name: 'Crypto Dashboard', 
      url: 'https://crypto-dashboard-domi.vercel.app',
      description: 'Live Krypto-Preise'
    }
  ];

  const handleLaunch = () => {
    // Redirect to your original website instead of the selected project
    window.open('https://domi731.github.io/CodeLaunch/', '_blank', 'noopener,noreferrer');
  };

  const selectedProjectInfo = launchableProjects.find(p => p.id === selectedProject);

  return (
    <section id="launcher" className="py-20 bg-tech-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-launch-blue mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-launch bg-clip-text text-transparent">Code Launcher</span>
            </h2>
          </div>
          <p className="text-gray-300 text-lg">
            Wähle ein Projekt aus und starte es direkt im Browser. 
            Keine Installation, keine Wartezeit – einfach klicken und loslegen.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-tech-dark border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="project-select" className="block text-sm font-medium text-gray-300 mb-3">
                  Projekt auswählen
                </label>
                <select
                  id="project-select"
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-launch-blue focus:outline-none transition-colors duration-300"
                >
                  <option value="">-- Projekt wählen --</option>
                  {launchableProjects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedProjectInfo && (
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white font-semibold mb-2">{selectedProjectInfo.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{selectedProjectInfo.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <ExternalLink size={14} className="mr-1" />
                    {selectedProjectInfo.url}
                  </div>
                </div>
              )}

              <button
                onClick={handleLaunch}
                className="w-full py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 bg-gradient-launch text-white hover:shadow-lg hover:shadow-launch-blue/25 hover:scale-105"
              >
                <Play size={24} />
                Zur originalen CodeLaunch Website
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              💡 Tipp: Der Button führt dich zur originalen CodeLaunch Website, 
              wo du alle Projekte direkt starten kannst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeLauncher;
