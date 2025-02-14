'use client';

import { Code, Server, Award, Brain, Globe } from 'lucide-react';
import SkillBadge from '@/components/ui/SkillBadge';

const SkillSection = ({ title, skills, type, darkMode, icon: Icon }) => (
  <div className="animate-fade-in">
    <div className="flex items-center gap-2 mb-4">
      <Icon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
      <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <SkillBadge key={skill} skill={skill} type={type} darkMode={darkMode} />
      ))}
    </div>
  </div>
);

const SoftSkillCard = ({ title, description, darkMode }) => (
  <div className={`
    p-5 rounded-xl transition-all duration-300
    ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'}
    transform hover:-translate-y-1 hover:shadow-lg
  `}>
    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h4>
    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
  </div>
);

const LanguageItem = ({ language, level, darkMode }) => (
  <div className={`
    flex justify-between items-center p-3 rounded-lg
    ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}
    hover:shadow-md transition-all duration-300
  `}>
    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{language}</span>
    <span className={`px-3 py-1 rounded-full text-sm
      ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-800'}
    `}>
      {level}
    </span>
  </div>
);

const Skills = ({ isVisible, darkMode }) => {
  const technicalSkills = {
    programming: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'C++',
      'PHP',
      'HTML/CSS',
      'SQL',
      'Bash'
    ],
    security: [
      'Pentesting',
      'Network Security',
      'Cryptography',
      'Security Auditing',
      'Vulnerability Assessment'
    ],
    infrastructure: [
      'VMware',
      'VirtualBox',
      'Proxmox',
      'Docker',
      'Linux',
      'Windows Server'
    ],
    certifications: [
      'Fortinet NSE1',
      'NSE2',
      'NSE3'
    ]
  };

  const softSkills = [
    {
      title: "Résolution de problèmes",
      description: "Capacité à analyser les problèmes complexes et à trouver des solutions efficaces"
    },
    {
      title: "Adaptabilité",
      description: "Flexibilité face aux nouvelles technologies et méthodologies"
    },
    {
      title: "Travail d'équipe",
      description: "Excellente communication et collaboration au sein d'équipes multidisciplinaires"
    },
    {
      title: "Autonomie",
      description: "Capacité à gérer des projets de manière indépendante et à prendre des initiatives"
    }
  ];

  const languages = [
    { language: "Français", level: "Natif" },
    { language: "Anglais", level: "B2" }
  ];

  if (!isVisible) return null;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Technical Skills */}
      <div className={`
        rounded-xl shadow-lg p-6
        ${darkMode ? 'bg-gray-800/50 backdrop-blur' : 'bg-white'}
      `}>
        <h3 className="section-header mb-6">Compétences Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <SkillSection
              title="Langages de Programmation"
              skills={technicalSkills.programming}
              type="code"
              darkMode={darkMode}
              icon={Code}
            />
            <SkillSection
              title="Sécurité"
              skills={technicalSkills.security}
              type="security"
              darkMode={darkMode}
              icon={Server}
            />
          </div>
          <div className="space-y-8">
            <SkillSection
              title="Infrastructure"
              skills={technicalSkills.infrastructure}
              type="infra"
              darkMode={darkMode}
              icon={Server}
            />
            <SkillSection
              title="Certifications"
              skills={technicalSkills.certifications}
              type="cert"
              darkMode={darkMode}
              icon={Award}
            />
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className={`
        rounded-xl shadow-lg p-6
        ${darkMode ? 'bg-gray-800/50 backdrop-blur' : 'bg-white'}
      `}>
        <div className="flex items-center gap-2 mb-6">
          <Brain className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
          <h3 className="section-header mb-0">Soft Skills</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {softSkills.map((skill, index) => (
            <SoftSkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className={`
        rounded-xl shadow-lg p-6
        ${darkMode ? 'bg-gray-800/50 backdrop-blur' : 'bg-white'}
      `}>
        <div className="flex items-center gap-2 mb-6">
          <Globe className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
          <h3 className="section-header mb-0">Langues</h3>
        </div>
        <div className="space-y-3">
          {languages.map((lang, index) => (
            <LanguageItem
              key={index}
              language={lang.language}
              level={lang.level}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;