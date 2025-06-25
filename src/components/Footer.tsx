
import React from 'react';
import { Github, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-dark border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-launch bg-clip-text text-transparent">
              CodeLaunch
            </h3>
            <p className="text-gray-300 mb-4">
              Eine moderne Entwicklerplattform zum Vorstellen und direkten Starten von Projekten.
            </p>
            <a
              href="https://domi731.github.io/CodeLaunch/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-launch-blue hover:text-launch-purple transition-colors duration-300 flex items-center gap-2"
            >
              Live Website besuchen
              <ExternalLink size={16} />
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-launch-blue transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-launch-blue transition-colors duration-300">
                  Projekte
                </a>
              </li>
              <li>
                <a href="#launcher" className="text-gray-300 hover:text-launch-blue transition-colors duration-300">
                  Code Launcher
                </a>
              </li>
              <li>
                <a href="#login" className="text-gray-300 hover:text-launch-blue transition-colors duration-300">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Technologien</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
              <span>© 2024 Domi</span>
              <Heart size={16} className="text-red-500" />
              <span>Made with passion</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/domi731"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-launch-blue transition-colors duration-300 flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://github.com/domi731/CodeLaunch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-launch-blue transition-colors duration-300"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
