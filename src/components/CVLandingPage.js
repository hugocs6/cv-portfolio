'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import ThemeToggle from '@/components/ui/ThemeToggle';

const CVLandingPage = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-slate-50'}`}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header darkMode={darkMode} />
      
      <main className="flex-grow px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <Navbar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            darkMode={darkMode} 
          />

          <div className="w-full">
            <Experience isVisible={activeTab === 'experience'} darkMode={darkMode} />
            <Skills isVisible={activeTab === 'competences'} darkMode={darkMode} />
            <Education isVisible={activeTab === 'formation'} darkMode={darkMode} />
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default CVLandingPage;