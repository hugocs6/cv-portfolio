'use client';

import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationCard = ({ school, degree, location, date, description, achievements, darkMode, index }) => {
  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={`
        ${darkMode ? 'bg-gray-800' : 'bg-white'} 
        p-6 rounded-xl shadow-lg
        transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300
        border ${darkMode ? 'border-gray-700' : 'border-gray-100'}
      `}>
        <div className="space-y-4">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {school}
              </h3>
            </div>
            <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {degree}
            </p>
            <div className="mt-2 space-y-2">
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
              <div className="flex items-center gap-2 mb-2">
                <Award className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Points clés :
                </h4>
              </div>
              <ul className={`list-disc list-inside space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {achievements.map((achievement, i) => (
                  <li key={i} className="ml-4">{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Education = ({ isVisible, darkMode }) => {
  const education = [
    {
      school: "EFREI Paris",
      degree: "Bachelor en Cybersécurité",
      location: "Villejuif",
      date: "2021 - Présent",
      description: "Formation approfondie en cybersécurité et systèmes d'information, avec une forte orientation pratique et technique.",
      achievements: [
        "Spécialisation en sécurité des réseaux et systèmes",
        "Projets pratiques en analyse de vulnérabilités",
        "Formation aux outils de sécurité modernes",
        "Participation active aux événements de cybersécurité"
      ]
    },
    {
      school: "O'clock",
      degree: "Titre professionnel de développeur web",
      location: "100% distanciel",
      date: "2018 - 2021",
      description: "création de site web ( front-end / back-end)",
      achievements: [
        " différent projet web",
      ]
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="space-y-8 py-4">
      {education.map((edu, index) => (
        <EducationCard
          key={index}
          {...edu}
          darkMode={darkMode}
          index={index}
        />
      ))}
    </div>
  );
};

export default Education;