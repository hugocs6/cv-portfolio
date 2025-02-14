'use client';

import { Briefcase, Code, GraduationCap, FolderGit2, MessageSquare } from 'lucide-react';

const NavItem = ({ icon: Icon, label, isActive, onClick, darkMode }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-lg
      transition-all duration-300 relative
      ${isActive 
        ? `${darkMode ? 'text-white' : 'text-blue-600'} font-semibold` 
        : `${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`
      }
      hover:scale-105
    `}
  >
    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-500' : ''}`} />
    <span>{label}</span>
    
    {/* Active indicator */}
    {isActive && (
      <span 
        className={`
          absolute bottom-0 left-0 w-full h-0.5 rounded-full
          bg-gradient-to-r from-blue-500 to-blue-400
          animate-scale-in
        `}
      />
    )}
  </button>
);

const Navbar = ({ activeTab, setActiveTab, darkMode }) => {
  const tabs = [
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'competences', label: 'Compétences', icon: Code },
    { id: 'formation', label: 'Formation', icon: GraduationCap },
    { id: 'projets', label: 'Projets', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  return (
    <nav className={`
      sticky top-0 z-50 py-4 mb-8
      ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}
      backdrop-blur-lg border-b
      ${darkMode ? 'border-gray-800' : 'border-gray-200'}
    `}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-4 flex-wrap">
          {tabs.map(tab => (
            <NavItem
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;