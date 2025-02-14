'use client';

import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';
import Image from 'next/image';

const Header = ({ darkMode }) => {
  return (
    <header className={`${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'header-gradient'} text-white min-h-screen px-4 sm:px-6 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto py-12 relative">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-8 text-center animate-fade-in">
          {/* Profile Image */}
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-75 group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full border-4 border-white/30 group-hover:scale-105 transition-transform duration-300" />
            <Image
              src="/images/profile.jpg"
              alt="Hugo Cannier"
              width={224}
              height={224}
              className="relative rounded-full w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-xl"
              priority
            />
          </div>
          
          {/* Profile Info */}
          <div className="w-full max-w-2xl space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-400 animate-slide-in">
                HUGO CANNIER
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-300 font-light animate-slide-in" style={{ animationDelay: '200ms' }}>
                Étudiant en Cybersécurité
              </p>
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto animate-slide-in" style={{ animationDelay: '400ms' }}>
                Passionné par la sécurité informatique et le développement, je suis à la recherche d&apos;une alternance pour mettre en pratique mes compétences et continuer mon apprentissage dans un environnement professionnel stimulant.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <a 
                href="mailto:hugo.cannier@efrei.net" 
                className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>hugo.cannier@efrei.net</span>
              </a>
              <a 
                href="tel:+33778664351" 
                className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
                aria-label="Téléphone"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+33 7 78 66 43 51</span>
              </a>
            </div>

            {/* Professional Links */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <a 
                href="https://github.com/votre-github" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/votre-linkedin" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="/cv.pdf" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Télécharger CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Disponibilité</h3>
            <p className="text-blue-200">Disponible immédiatement</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Recherche</h3>
            <p className="text-blue-200">Stage ou Alternance en Cybersécurité</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Localisation</h3>
            <p className="text-blue-200">Région parisienne</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;