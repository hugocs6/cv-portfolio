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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-slate-50'} flex flex-col`}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header darkMode={darkMode} />
      
      <main className="max-w-6xl mx-auto p-8 -mt-8 flex-grow">
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          darkMode={darkMode} 
        />

        <Experience isVisible={activeTab === 'experience'} darkMode={darkMode} />
        <Skills isVisible={activeTab === 'competences'} darkMode={darkMode} />
        <Education isVisible={activeTab === 'formation'} darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default CVLandingPage;