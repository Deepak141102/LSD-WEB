import React from 'react';
import { Home, Rocket, Brain, Compass, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Rocket, label: 'Explore' },
    { icon: Brain, label: 'Learn' },
    { icon: Compass, label: 'Navigate' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <nav className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-2xl backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
        <div className="relative">
          {/* Orbital Ring */}
          <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow">
            <div className="absolute h-3 w-3 bg-blue-500 rounded-full -top-1.5 left-1/2 -translate-x-1/2"></div>
          </div>
          
          {/* Menu Items Container */}
          <div className="flex items-center gap-8 px-8 py-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="group relative flex flex-col items-center"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <item.icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <span className="absolute -bottom-6 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                  {item.label}
                </span>
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {darkMode ? (
                <Moon className="h-5 w-5 text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;