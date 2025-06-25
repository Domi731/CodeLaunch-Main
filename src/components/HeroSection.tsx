
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-launch-blue/5 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-launch-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-launch-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-launch-blue mr-3 animate-pulse" />
          <span className="text-launch-blue font-semibold tracking-wide uppercase text-sm">
            Willkommen bei CodeLaunch
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Starte deine
          <span className="bg-gradient-launch bg-clip-text text-transparent block">
            Projekte direkt
          </span>
          aus dem Browser
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Eine moderne Entwicklerplattform zur Vorstellung und zum direkten Starten 
          von Softwareprojekten. Keine lokale Installation nötig – einfach klicken und loslegen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="launch-button flex items-center gap-2"
          >
            Projekte entdecken
            <ArrowRight size={20} />
          </button>
          
          <button 
            onClick={() => document.getElementById('launcher')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-launch-blue hover:text-launch-blue transition-all duration-300 font-medium"
          >
            Code Launcher
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
