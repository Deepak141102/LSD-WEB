import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Rocket, Brain, MailPlus, ChevronsRight, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainItems = [
    { icon: Rocket, label: "Explore",path:"/explore" },
    { icon: Brain, label: "Learn",path:"/learn" },
    { icon: MailPlus, label: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed ${
        isMobile ? "bottom-4 left-1/2 -translate-x-1/2" : "mt-7 ml-10 top-0"
      } bg-white dark:bg-gray-800 rounded-full p-2 shadow-2xl backdrop-blur-lg 
      bg-opacity-80 dark:bg-opacity-80 overflow-hidden transition-all duration-300 
      ${
        isMobile
          ? isExpanded ? "w-[90vw]" : "w-[70vw]"
          : isExpanded ? "w-[40vw]" : "w-[7.8vw] hover:w-[9vw]"
      } 
      ${isMobile && "max-w-[400px]"} z-50`}
    >
      <div className="relative">
        {!isMobile && (
          <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow">
            <div className="absolute h-3 w-3 bg-blue-500 rounded-full -top-1.5 left-1/2 -translate-x-1/2" />
          </div>
        )}

        <div className={`flex items-center ${isMobile ? "gap-3" : "gap-8"} px-[1rem] py-3`}>
          {!isMobile && <NavButton icon={Home} label="Home" onClick={() => navigate("/")} />}

          {!isExpanded && !isMobile && (
            <NavButton 
              icon={ChevronsRight} 
              label="More"
              onClick={() => setIsExpanded(true)}
            />
          )}

          {isExpanded && mainItems.map((item, index) => (
            <NavButton key={index} {...item} onClick={() => item.path && navigate(item.path)} isMobile={isMobile} />
          ))}

          {isMobile && !isExpanded && (
            <>
              <NavButton icon={Home} label="Home" onClick={() => navigate("/")} />
              <NavButton 
                icon={ChevronsRight} 
                label="More"
                onClick={() => setIsExpanded(true)}
              />
            </>
          )}

          <div className={`flex items-center ${isMobile ? "gap-4" : "gap-8"} ml-auto`}>
            <div className="p-2">
              <ThemeToggle />
            </div>
            {isExpanded && (
              <NavButton
                icon={X}
                label="Less"
                onClick={() => setIsExpanded(false)}
                isMobile={isMobile}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavButton = ({ icon: Icon, label, onClick, isMobile }) => (
  <button
    onClick={onClick}
    className={`group relative flex flex-col items-center ${
      isMobile ? "scale-110" : ""
    }`}
  >
    <div className="relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 
        rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 max-md:text-sm" />
      <Icon className={`${
        isMobile ? "h-5 w-5 mx-2" : "h-6 w-6"
      } text-gray-700 dark:text-gray-300 transition-colors duration-300`} />
    </div>
    {!isMobile && (
      <span className="absolute -bottom-6 text-xs font-medium text-gray-600 
        dark:text-gray-400 opacity-0 group-hover:opacity-100 transform 
        group-hover:-translate-y-1 transition-all duration-300">
        {label}
      </span>
    )}
  </button>
);

export default NavBar;