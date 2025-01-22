// components/layout/Footer.js
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${
      darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'
    } py-8 mt-16`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Contact
            </h3>
            <div className="space-y-2">
              <a 
                href="mailto:hugo.cannier@efrei.net" 
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hugo.cannier@efrei.net
              </a>
              <a 
                href="tel:+33778664351" 
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +33 7 78 66 43 51
              </a>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Réseaux sociaux
            </h3>
            <div className="space-y-2">
              <a 
                href="https://github.com/hugocs6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/hugo-cannier-8721562b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Disponibilité */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Disponibilité
            </h3>
            <p className="mb-2">Recherche de stage/alternance en cybersécurité</p>
            <p>Région parisienne</p>
          </div>
        </div>

        {/* Copyright */}
        <div className={`text-center mt-8 pt-8 border-t ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className="text-sm">
            © {new Date().getFullYear()} Hugo Cannier. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;