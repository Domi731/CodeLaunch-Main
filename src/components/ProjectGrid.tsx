
import React, { useState } from 'react';
import { ExternalLink, Github, Star, Search } from 'lucide-react';

const ProjectGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Weather Dashboard',
      description: 'Eine moderne Wetterapp mit Vorhersagen und interaktiven Karten',
      image: '/placeholder.svg',
      tags: ['React', 'TypeScript', 'API'],
      stars: 23,
      demoUrl: 'https://weather-dashboard-domi.vercel.app',
      githubUrl: 'https://github.com/domi731/weather-app'
    },
    {
      id: 2,
      title: 'Smart Todo List',
      description: 'Intelligente Aufgabenverwaltung mit KI-gestützten Empfehlungen',
      image: '/placeholder.svg',
      tags: ['Vue.js', 'Node.js', 'AI'],
      stars: 17,
      demoUrl: 'https://smart-todo-domi.netlify.app',
      githubUrl: 'https://github.com/domi731/smart-todo'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive Portfolio mit animierten Übergängen und Projekten',
      image: '/placeholder.svg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      stars: 31,
      demoUrl: 'https://domi731.github.io/portfolio',
      githubUrl: 'https://github.com/domi731/portfolio'
    },
    {
      id: 4,
      title: 'Scientific Calculator',
      description: 'Erweiterte Berechnungen mit graphischer Darstellung',
      image: '/placeholder.svg',
      tags: ['JavaScript', 'Canvas', 'Math'],
      stars: 12,
      demoUrl: 'https://calculator-domi.surge.sh',
      githubUrl: 'https://github.com/domi731/calculator'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time Chat mit Rooms und File-Sharing',
      image: '/placeholder.svg',
      tags: ['Socket.io', 'Express', 'MongoDB'],
      stars: 44,
      demoUrl: 'https://chat-app-domi.herokuapp.com',
      githubUrl: 'https://github.com/domi731/chat-app'
    },
    {
      id: 6,
      title: 'Code Playground',
      description: 'Online-Editor für HTML, CSS und JavaScript',
      image: '/placeholder.svg',
      tags: ['Monaco', 'Webpack', 'Sandbox'],
      stars: 28,
      demoUrl: 'https://code-playground-domi.vercel.app',
      githubUrl: 'https://github.com/domi731/code-playground'
    },
    {
      id: 7,
      title: 'E-Commerce Store',
      description: 'Vollständiger Online-Shop mit Warenkorb und Bezahlung',
      image: '/placeholder.svg',
      tags: ['React', 'Stripe', 'Next.js'],
      stars: 38,
      demoUrl: 'https://shop-domi.vercel.app',
      githubUrl: 'https://github.com/domi731/ecommerce-store'
    },
    {
      id: 8,
      title: 'Music Player',
      description: 'Moderne Web-Musikplayer mit Playlist-Management',
      image: '/placeholder.svg',
      tags: ['Vue.js', 'Audio API', 'PWA'],
      stars: 22,
      demoUrl: 'https://music-player-domi.netlify.app',
      githubUrl: 'https://github.com/domi731/music-player'
    },
    {
      id: 9,
      title: 'Task Manager',
      description: 'Projektmanagement-Tool mit Kanban-Board und Zeiterfassung',
      image: '/placeholder.svg',
      tags: ['React', 'Redux', 'Firebase'],
      stars: 35,
      demoUrl: 'https://taskmanager-domi.web.app',
      githubUrl: 'https://github.com/domi731/task-manager'
    },
    {
      id: 10,
      title: 'Recipe Finder',
      description: 'Rezept-Suchmaschine mit Zutaten-Filter und Nährwertanzeige',
      image: '/placeholder.svg',
      tags: ['Angular', 'API', 'TypeScript'],
      stars: 19,
      demoUrl: 'https://recipe-finder-domi.surge.sh',
      githubUrl: 'https://github.com/domi731/recipe-finder'
    },
    {
      id: 11,
      title: 'Expense Tracker',
      description: 'Ausgaben-Tracker mit Charts und Budget-Verwaltung',
      image: '/placeholder.svg',
      tags: ['React', 'Chart.js', 'LocalStorage'],
      stars: 26,
      demoUrl: 'https://expense-tracker-domi.github.io',
      githubUrl: 'https://github.com/domi731/expense-tracker'
    },
    {
      id: 12,
      title: 'Cryptocurrency Dashboard',
      description: 'Live-Krypto-Preise mit Portfolio-Tracking und Alerts',
      image: '/placeholder.svg',
      tags: ['React', 'WebSocket', 'CoinGecko API'],
      stars: 41,
      demoUrl: 'https://crypto-dashboard-domi.vercel.app',
      githubUrl: 'https://github.com/domi731/crypto-dashboard'
    }
  ];

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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

        {/* Search Bar with working functionality */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Projekte durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-tech-gray border border-gray-700 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:border-launch-blue focus:outline-none transition-colors duration-300"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          {searchTerm && (
            <p className="text-gray-400 text-sm mt-2 text-center">
              {filteredProjects.length} Projekt{filteredProjects.length !== 1 ? 'e' : ''} gefunden
            </p>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
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
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">Keine Projekte gefunden</h3>
              <p className="text-gray-500">
                Versuche einen anderen Suchbegriff oder schaue dir alle Projekte an.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
