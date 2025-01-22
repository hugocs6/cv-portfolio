'use client';

import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const Header = ({ darkMode }) => {
  return (
    <header className={`${darkMode ? 'bg-gradient-to-r from-gray-900 to-blue-900' : 'bg-gradient-to-r from-slate-900 to-blue-900'} text-white min-h-screen px-4 sm:px-6 relative`}>
      <div className="max-w-6xl mx-auto py-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Profile Image */}
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7dd3c7] to-[#86cdea] group-hover:scale-105 transition-transform duration-300" />
            <Image
              src="/images/profile.jpg"
              alt="Hugo Cannier"
              width={192}
              height={192}
              className="relative rounded-full w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          
          {/* Profile Info */}
          <div className="w-full max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                HUGO CANNIER
              </h1>
              <p className="text-xl sm:text-2xl text-blue-300">Étudiant en Cybersécurité</p>
              <p className="text-base sm:text-lg text-gray-300">
                Étudiant passionné en cybersécurité à l&apos;Efrei, à la recherche d&apos;une alternance pour ma troisième année.
                Certifié Fortinet NSE1-3, avec une solide base en développement et sécurité informatique.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a 
                href="mailto:hugo.cannier@efrei.net" 
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors w-full sm:w-auto"
                aria-label="Envoyer un email"
              >
                <Mail className="w-5 h-5" />
                <span>hugo.cannier@efrei.net</span>
              </a>
              <a 
                href="tel:+33778664351" 
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors w-full sm:w-auto"
                aria-label="Appeler"
              >
                <Phone className="w-5 h-5" />
                <span>+33 7 78 66 43 51</span>
              </a>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-4 mt-12">
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
    </header>
  );
};

export default Header;