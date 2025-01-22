// components/sections/Education.js
const EducationCard = ({ title, school, date, description, darkMode }) => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
          <p className="text-blue-500">{school}</p>
        </div>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{date}</span>
      </div>
      <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
  
  const Education = ({ isVisible, darkMode }) => {
    const education = [
      {
        title: "Bachelor Cybersécurité & Ethical Hacking",
        school: "Efrei",
        date: "Depuis 09/2022",
        description: "Formation spécialisée en cybersécurité, ethical hacking et sécurité des systèmes d'information."
      },
      {
        title: "Titre Professionnel de développeur web",
        school: "O'clock",
        date: "2021 - 2022",
        description: "Formation intensive en développement web (équivalent Bac+2)"
      }
    ];
  
    if (!isVisible) return null;
  
    return (
      <section className="space-y-6">
        {education.map((edu, index) => (
          <EducationCard key={index} {...edu} darkMode={darkMode} />
        ))}
      </section>
    );
  };
  
  export default Education;