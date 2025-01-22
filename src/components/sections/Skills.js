// components/sections/Skills.js
import SkillBadge from '@/components/ui/SkillBadge';

const SkillSection = ({ title, skills, type, darkMode }) => (
  <div>
    <h4 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <SkillBadge key={skill} skill={skill} type={type} darkMode={darkMode} />
      ))}
    </div>
  </div>
);

const SoftSkillCard = ({ title, description, darkMode }) => (
  <div className={`p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h4>
    <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
  </div>
);

const LanguageItem = ({ language, level, darkMode }) => (
  <div className="flex justify-between items-center">
    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{language}</span>
    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{level}</span>
  </div>
);

const Skills = ({ isVisible, darkMode }) => {
  const technicalSkills = {
    programming: ['Python', 'JavaScript', 'Java', 'C++', 'PHP', 'HTML/CSS', 'SQL', 'Bash'],
    virtualization: ['VMware', 'VirtualBox', 'Proxmox', 'Docker'],
    certifications: ['Fortinet NSE1', 'NSE2', 'NSE3']
  };

  const softSkills = [
    {
      title: "Adaptabilité",
      description: "Capacité à s'adapter rapidement aux nouvelles technologies"
    },
    {
      title: "Capacité d'analyse",
      description: "Approche méthodique des problèmes"
    },
    {
      title: "Leadership",
      description: "Expérience en gestion d'équipe"
    }
  ];

  const languages = [
    { language: "Français", level: "Natif" },
    { language: "Anglais", level: "B2" }
  ];

  if (!isVisible) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Technical Skills */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-6 transition-colors duration-300`}>
        <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
          Compétences Techniques
        </h3>
        <div className="space-y-4">
          <SkillSection
            title="Langages de Programmation"
            skills={technicalSkills.programming}
            type="default"
            darkMode={darkMode}
          />
          <SkillSection
            title="Virtualisation & Conteneurs"
            skills={technicalSkills.virtualization}
            type="tech"
            darkMode={darkMode}
          />
          <SkillSection
            title="Certifications"
            skills={technicalSkills.certifications}
            type="cert"
            darkMode={darkMode}
          />
        </div>
      </div>

      {/* Soft Skills and Languages */}
      <div className="space-y-6">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-6 transition-colors duration-300`}>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 gap-4">
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

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-6 transition-colors duration-300`}>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
            Langues
          </h3>
          <div className="space-y-4">
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
    </div>
  );
};

export default Skills;