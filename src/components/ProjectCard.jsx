import React from 'react';
import { ExternalLink } from 'lucide-react';

 const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
          {project.icon}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} 
          className="inline-flex items-center gap-1.5 text-indigo-600 font-medium hover:text-indigo-800 transition-colors mt-auto"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;