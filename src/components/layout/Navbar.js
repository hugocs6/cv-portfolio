// components/layout/Navbar.js
const Navbar = ({ activeTab, setActiveTab, darkMode }) => {
    const tabs = [
      { id: 'experience', label: 'Expérience' },
      { id: 'competences', label: 'Compétences' },
      { id: 'formation', label: 'Formation' }
    ];
  
    return (
      <div className={`mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-2 transition-colors duration-300`}>
        <div className="flex justify-center space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : darkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Navbar;