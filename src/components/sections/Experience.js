'use client';

import { Building2, Calendar, MapPin } from 'lucide-react';

const ExperienceCard = ({ title, company, location, date, description, achievements, technologies, darkMode, index }) => {
  return (
    <div 
      className="timeline-container animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Timeline dot */}
      <div className="timeline-dot" />
      
      {/* Experience Card */}
      <div className={`
        ${darkMode ? 'bg-gray-800' : 'bg-white'} 
        p-6 rounded-xl shadow-lg hover:shadow-xl
        transform hover:-translate-y-1 transition-all duration-300
        border ${darkMode ? 'border-gray-700' : 'border-gray-100'}
      `}>
        <div className="space-y-4">
          {/* Header */}
          <div>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {title}
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 text-blue-500">
                <Building2 className="w-4 h-4" />
                <span>{company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Réalisations clés :
              </h4>
              <ul className={`list-disc list-inside space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Technologies utilisées :
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm
                      ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}
                      hover:scale-105 transition-transform duration-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = ({ isVisible, darkMode }) => {
  const experiences = [
    {
      title: "Stage - Cybersécurité",
      company: "Fortinet",
      location: "Courbevoie",
      date: "Mai - Juin 2023",
      description: "Stage en cybersécurité chez Fortinet, leader mondial des solutions de sécurité réseau intégrées et automatisées.",
      achievements: [
        "Obtention des certifications NSE 1, NSE 2 et NSE 3",
        "Formation approfondie sur les solutions de sécurité Fortinet",
        "Participation à des projets d'analyse de sécurité réseau",
        "Apprentissage des bonnes pratiques en matière de cybersécurité"
      ],
      technologies: [
        "FortiGate",
        "FortiAnalyzer",
        "FortiManager",
        "FortiWeb"
      ]
    },
    {
      title: "Technicien informatique",
      company: "SCC",
      location: "Lieusaint",
      date: "2020 - 2021",
      description: "Technicien informatique au sein de SCC, entreprise spécialisée dans les services et solutions IT.",
      achievements: [
        "Support technique niveau 1 et 2",
        "Maintenance préventive et corrective des systèmes",
        "Installation et configuration de matériel informatique",
        "Gestion et optimisation des infrastructures IT"
      ],
      technologies: [
        "Windows Server",
        "Active Directory",
        "VMware",
        "Office 365",
        "PowerShell"
      ]
    }
  ];

  if (!isVisible) return null;

  return (
    <section className="relative space-y-12 py-4">
      {/* Timeline line */}
      <div className="timeline-line" />
      
      {/* Experience Cards */}
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          {...exp}
          darkMode={darkMode}
          index={index}
        />
      ))}
    </section>
  );
};

export default Experience;