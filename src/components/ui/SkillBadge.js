'use client';

const SkillBadge = ({ skill, type, darkMode }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'code':
        return {
          bg: darkMode ? 'bg-purple-500/20' : 'bg-purple-100',
          text: darkMode ? 'text-purple-300' : 'text-purple-700',
          border: darkMode ? 'border-purple-500/30' : 'border-purple-200'
        };
      case 'security':
        return {
          bg: darkMode ? 'bg-red-500/20' : 'bg-red-100',
          text: darkMode ? 'text-red-300' : 'text-red-700',
          border: darkMode ? 'border-red-500/30' : 'border-red-200'
        };
      case 'infra':
        return {
          bg: darkMode ? 'bg-green-500/20' : 'bg-green-100',
          text: darkMode ? 'text-green-300' : 'text-green-700',
          border: darkMode ? 'border-green-500/30' : 'border-green-200'
        };
      case 'cert':
        return {
          bg: darkMode ? 'bg-yellow-500/20' : 'bg-yellow-100',
          text: darkMode ? 'text-yellow-300' : 'text-yellow-700',
          border: darkMode ? 'border-yellow-500/30' : 'border-yellow-200'
        };
      default:
        return {
          bg: darkMode ? 'bg-blue-500/20' : 'bg-blue-100',
          text: darkMode ? 'text-blue-300' : 'text-blue-700',
          border: darkMode ? 'border-blue-500/30' : 'border-blue-200'
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      border transition-all duration-300
      hover:scale-105 hover:shadow-md
      ${styles.bg} ${styles.text} ${styles.border}
    `}>
      {skill}
    </span>
  );
};

export default SkillBadge;