import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, Sparkles, Moon, Sun } from 'lucide-react';

const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [wavePhase, setWavePhase] = useState(0);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animate wave effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase(prev => (prev + 0.05) % (2 * Math.PI));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Generate wave points
  const generateWavePoints = (): string => {
    const points: string[] = []; // Explicitly specify the type as string[]
  
    const segments = 20;
  
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 100;
      const y = 10 * Math.sin(wavePhase + (i / segments) * 4 * Math.PI);
      points.push(`${x},${y}`); // Now TypeScript knows this is a string[]
    }
  
    return points.join(" "); // Join the array into a single string
  };
  
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  // Calculate distance from mouse for interactive glow
  const calculateDistance = (x: number, y: number) => {
    const dx = mousePosition.x - x;
    const dy = mousePosition.y - y;
    return Math.sqrt(dx * dx + dy * dy);
  };
  
  return (
    <footer className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800'} transition-colors duration-500`}>
      {/* Interactive wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className={`w-full h-20 ${isDarkMode ? 'fill-gray-800' : 'fill-white'} transition-colors duration-500`} 
          viewBox="0 0 100 20" 
          preserveAspectRatio="none"
        >
          <polygon points={`0,20 ${generateWavePoints()} 100,20`} />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left section - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className={`h-6 w-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} transition-colors duration-500`} />
              <h3 className="text-xl font-bold">Creative Footer</h3>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-500`}>
              A unique, interactive footer design with dynamic elements and creative styling. Hover around to see the magic happen!
            </p>
            <div 
              className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer`}
              style={{
                boxShadow: `0 4px 20px rgba(${isDarkMode ? '138, 75, 255' : '79, 70, 229'}, ${Math.max(0, 0.2 - calculateDistance(mousePosition.x, mousePosition.y) / 5000)})`
              }}
            >
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Made with passion</span>
              </div>
            </div>
          </div>
          
          {/* Middle section - Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className={`group flex items-center space-x-2 transition-all duration-300 ${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'}`}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget;
                      target.style.transform = 'translateX(8px)';
                      setTimeout(() => {
                        target.style.transform = 'translateX(0)';
                      }, 300);
                    }}
                  >
                    <span className={`h-1 w-0 ${isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'} group-hover:w-4 transition-all duration-300`}></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right section - Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Github />, label: 'GitHub' },
                { icon: <Twitter />, label: 'Twitter' },
                { icon: <Linkedin />, label: 'LinkedIn' },
                { icon: <Mail />, label: 'Email' }
              ].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`relative flex items-center justify-center p-3 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-md transition-all duration-300 hover:scale-110 hover:rotate-3`}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.transform = 'scale(1.1) rotate(3deg)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <span className="sr-only">{item.label}</span>
                  <div className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {item.icon}
                  </div>
                  <span className={`absolute -top-2 -right-2 w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-pink-500' : 'bg-yellow-400'} opacity-0 hover:opacity-100 transition-opacity duration-300`}></span>
                </a>
              ))}
            </div>
            
            {/* Newsletter subscription */}
            <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-500`}>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={`flex-grow px-4 py-2 rounded-l-lg focus:outline-none ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-800 placeholder-gray-500'} transition-colors duration-500`}
                />
                <button 
                  className="px-4 py-2 rounded-r-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.classList.add('animate-pulse');
                    setTimeout(() => {
                      target.classList.remove('animate-pulse');
                    }, 500);
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-opacity-20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>
            © {new Date().getFullYear()} Creative Footer. All rights reserved.
          </p>
          
          {/* Theme toggle */}
          <button 
            onClick={toggleDarkMode}
            className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300 hover:scale-110`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-indigo-600" />
            )}
          </button>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
  {Array.from({ length: 15 }).map((_, i) => (
    <div
      key={i}
      className={`absolute rounded-full ${
        i % 3 === 0 ? "bg-pink-400" : i % 3 === 1 ? "bg-indigo-400" : "bg-yellow-400"
      } opacity-15 animate-float`}
      style={{
        width: `${Math.random() * 25 + 10}px`, // Slightly bigger particles
        height: `${Math.random() * 25 + 10}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 8000 + 8000}s`, // Super slow floating (40s - 80s)
        animationDelay: `${Math.random() * 8000}s`, // More variation in delay
      }}
    />
  ))}
  <style>{`@keyframes float {
  0% { transform: translateY(0) translateX(0); opacity: 0.2; }
  50% { transform: translateY(-50px) translateX(20px); opacity: 0.4; }
  100% { transform: translateY(0) translateX(0); opacity: 0.2; }
}

.animate-float {
  animation: float ease-in-out infinite;
}
`}</style>
</div>

    </footer>
  );
};

export default Footer;