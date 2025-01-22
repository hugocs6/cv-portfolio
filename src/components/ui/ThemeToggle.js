'use client';

import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-4 right-4 p-3 rounded-full transition-all duration-300 z-50 ${
        darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'
      } shadow-lg hover:scale-110`}
      aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;