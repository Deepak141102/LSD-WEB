import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 flex flex-col h-full 
      dark:bg-gradient-to-b from-[#1e293b] to-[#0f172a] dark:border dark:border-gray-700 
      hover:-translate-y-1 hover:shadow-xl animate-fadeIn">
      
      {/* Animated Dots & Squares */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light Mode Dots */}
        <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-gray-400 rounded-full animate-ping dark:hidden"></div>
        <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse dark:hidden"></div>

        {/* Dark Mode Dots */}
        <div className="absolute top-5 right-5 w-2 h-2 bg-blue-400/60 rounded-full animate-ping hidden dark:block"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500/50 rounded-full animate-bounce hidden dark:block"></div>

        {/* Floating Squares */}
        <div className="absolute top-6 left-10 w-4 h-4 bg-gray-300 dark:bg-blue-700/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-8 right-8 w-5 h-5 bg-gray-200 dark:bg-blue-600/50 rotate-12 animate-bounce"></div>
        <div className="absolute top-16 right-12 w-3 h-3 bg-gray-400 dark:bg-blue-500/60 rotate-45 animate-pulse"></div>
      </div>

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md 
          dark:bg-white/10 dark:backdrop-blur-md dark:text-white">
          {project.icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow dark:text-gray-400">
          {project.description}
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded 
              dark:bg-gray-700/40 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link Section */}
        <a 
          href={project.link} 
          className="inline-flex items-center gap-1.5 text-indigo-600 font-medium hover:text-indigo-800 transition-colors mt-auto 
          dark:text-gray-300 dark:hover:text-white group"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
