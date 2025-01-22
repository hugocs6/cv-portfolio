'use client';

import { Mail, Phone } from 'lucide-react';

const Header = ({ darkMode }) => {
  return (
    <header className={`${darkMode ? 'bg-gradient-to-r from-gray-900 to-blue-900' : 'bg-gradient-to-r from-slate-900 to-blue-900'} text-white`}>
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-48 h-48 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7dd3c7] to-[#86cdea] group-hover:scale-105 transition-transform duration-300" />
            <img
              src="/images/profile.jpg"
              alt="Hugo Cannier"
              className="relative rounded-full w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                HUGO CANNIER
              </h1>
              <p className="text-2xl text-blue-300">Étudiant en Cybersécurité</p>
              <p className="text-lg text-gray-300 max-w-2xl">
                Étudiant passionné en cybersécurité à l'Efrei, à la recherche d'une alternance pour ma troisième année.
                Certifié Fortinet NSE1-3, avec une solide base en développement et sécurité informatique.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
              <a href="mailto:hugo.cannier@efrei.net" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" />
                <span>hugo.cannier@efrei.net</span>
              </a>
              <a href="tel:+33778664351" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+33 7 78 66 43 51</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-semibold">Disponibilité</h3>
            <p className="text-gray-300">Disponible immédiatement</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-semibold">Recherche</h3>
            <p className="text-gray-300">Stage ou Alternance en Cybersécurité</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
            <h3 className="text-xl font-semibold">Localisation</h3>
            <p className="text-gray-300">Région parisienne</p>
          </div>
        </div>
      </div>
      
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className={darkMode ? 'fill-gray-900' : 'fill-slate-50'}
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;