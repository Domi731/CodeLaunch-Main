
import React from 'react';
import { Rocket, Code2, User, Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-tech-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-launch-blue animate-float" />
            <h1 className="text-2xl font-bold bg-gradient-launch bg-clip-text text-transparent">
              CodeLaunch
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link flex items-center gap-2">
              <Home size={18} />
              Home
            </a>
            <a href="#projects" className="nav-link flex items-center gap-2">
              <Code2 size={18} />
              Projekte
            </a>
            <a href="#launcher" className="nav-link flex items-center gap-2">
              <Rocket size={18} />
              Launch
            </a>
            <a href="#login" className="nav-link flex items-center gap-2">
              <User size={18} />
              Login
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
