// src/components/sections/Experience.js

const ExperienceCard = ({ title, company, date, description, darkMode, index }) => {
  return (
    <div 
      className="relative pl-8 timeline-item animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Point sur la timeline */}
      <div className="absolute left-[-5px] top-0 w-3 h-3 bg-blue-500 rounded-full" />
      
      {/* Carte d'expérience */}
      <div className={`
        ${darkMode ? 'bg-gray-800' : 'bg-white'} 
        p-6 rounded-xl shadow-sm 
        hover:shadow-lg transition-all duration-300
      `}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {title}
            </h3>
            <p className="text-blue-500 hover:text-blue-400 transition-colors">
              {company}
            </p>
          </div>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {date}
          </span>
        </div>
        <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const Experience = ({ isVisible, darkMode }) => {
  const experiences = [
    {
      title: "Stage - Cybersécurité",
      company: "Fortinet - Courbevoie",
      date: "Mai - Juin 2023",
      description: "Obtention des certifications NSE 1, NSE 2 et NSE 3 en cybersécurité. Formation approfondie sur les solutions de sécurité Fortinet."
    },
    {
      title: "Technicien informatique",
      company: "SCC - Lieusaint",
      date: "2020 - 2021",
      description: "Support technique, maintenance des systèmes et installation du matériel informatique. Gestion et optimisation des infrastructures IT."
    }
  ];

  if (!isVisible) return null;

  return (
    <section className="space-y-8">
      <div className="relative">
        {/* Ligne verticale de la timeline */}
        <div className="absolute left-0 top-0 w-1 h-full bg-blue-200 rounded" />
        
        {/* Cartes d'expérience */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              {...exp}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;