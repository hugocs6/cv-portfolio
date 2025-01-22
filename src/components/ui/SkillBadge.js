const SkillBadge = ({ skill, type = 'default', darkMode }) => {
  const colors = {
    default: darkMode ? 'bg-blue-900/50 text-blue-100' : 'bg-blue-100 text-blue-700',
    tech: darkMode ? 'bg-green-900/50 text-green-100' : 'bg-green-100 text-green-700',
    cert: darkMode ? 'bg-purple-900/50 text-purple-100' : 'bg-purple-100 text-purple-700',
  };

  return (
    <span 
      className={`px-3 py-1 ${colors[type]} rounded-full text-sm skill-badge hover:shadow-lg cursor-default`}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;