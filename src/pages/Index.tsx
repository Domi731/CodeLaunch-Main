
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CodeLauncher from '../components/CodeLauncher';
import ProjectGrid from '../components/ProjectGrid';
import LoginSection from '../components/LoginSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main>
        <HeroSection />
        <CodeLauncher />
        <ProjectGrid />
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
