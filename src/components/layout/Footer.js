'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`
      mt-16 py-8 border-t
      ${darkMode 
        ? 'bg-gray-900 border-gray-800 text-gray-400' 
        : 'bg-white border-gray-200 text-gray-600'
      }
    `}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <SocialLink
              href="https://github.com/votre-github"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/votre-linkedin"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:hugo.cannier@efrei.net"
              icon={Mail}
              label="Email"
            />
          </div>

          {/* Copyright */}
          <div className="text-sm text-center">
            <p>© {currentYear} Hugo Cannier. Tous droits réservés.</p>
            <p className="mt-1">
              Étudiant en Cybersécurité à l&apos;EFREI Paris
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;