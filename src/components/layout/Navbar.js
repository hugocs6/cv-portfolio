// components/layout/Navbar.js
const Navbar = ({ activeTab, setActiveTab, darkMode }) => {
  return (
    <div className={`sticky top-0 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg px-4 py-2 mb-8`}>
      <div className="flex justify-center space-x-2 sm:space-x-4">
        <button
          onClick={() => setActiveTab('experience')}
          className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeTab === 'experience'
              ? 'bg-blue-500 text-white'
              : darkMode 
                ? 'text-gray-300 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Expérience
        </button>
        <button
          onClick={() => setActiveTab('competences')}
          className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeTab === 'competences'
              ? 'bg-blue-500 text-white'
              : darkMode 
                ? 'text-gray-300 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Compétences
        </button>
        <button
          onClick={() => setActiveTab('formation')}
          className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
            activeTab === 'formation'
              ? 'bg-blue-500 text-white'
              : darkMode 
                ? 'text-gray-300 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Formation
        </button>
      </div>
    </div>
  );
};

export default Navbar;