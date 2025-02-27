import React, { useEffect, useState } from "react";
import { Home, Rocket, Brain, Compass, Sun, Moon, ChevronsRight, X } from "lucide-react";
function NavBar() {
  const [darkMode, setDarkMode] = useState(() => 
    localStorage.getItem("theme") === "dark"
  );
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const mainItems = [
    { icon: Rocket, label: "Explore" },
    { icon: Brain, label: "Learn" },
    { icon: Compass, label: "Navigate" },
  ];

  return (
    // <div className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav
        className={`fixed mt-4 ml-5 bg-white dark:bg-gray-800 rounded-full p-2 shadow-2xl backdrop-blur-lg 
        bg-opacity-80 dark:bg-opacity-80 overflow-hidden transition-all duration-300 max-md:w-[25vw]
        ${isExpanded ? "w-[40vw]" : "w-[7.8vw] hover:w-[9vw]"}`}
      >
        <div className="relative">
          <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow">
            <div className="absolute h-3 w-3 bg-blue-500 rounded-full -top-1.5 left-1/2 -translate-x-1/2" />
          </div>

          <div className="flex items-center gap-8 px-[1rem] py-3 max-md:flex-col">
            <NavButton icon={Home} label="Home" />

            {!isExpanded && (
              <NavButton 
                icon={ChevronsRight} 
                label="More"
                onClick={() => setIsExpanded(true)}
              />
            )}

            {isExpanded && mainItems.map((item, index) => (
              <NavButton key={index} {...item} />
            ))}

            <div className="flex items-center gap-8 ml-auto max-md:flex max-md:flex-col">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 
                  transition-colors duration-300"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {isExpanded && (
                <NavButton
                  icon={X}
                  label="Less"
                  onClick={() => setIsExpanded(false)}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    // </div>
  );
}

const NavButton = ({ icon: Icon, label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`group relative flex flex-col items-center ${className}`}
  >
    <div className="relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 
        rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 
        group-hover:text-blue-500 dark:group-hover:text-blue-400 
        transition-colors duration-300" />
    </div>
    <span className="absolute -bottom-6 text-xs font-medium text-gray-600 
      dark:text-gray-400 opacity-0 group-hover:opacity-100 transform 
      group-hover:-translate-y-1 transition-all duration-300">
      {label}
    </span>
  </button>
);

export default NavBar;