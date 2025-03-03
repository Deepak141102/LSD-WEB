import React, { useState, useEffect } from "react"; // Import useEffect
import ProjectCard from "./ProjectCard";
import { Code, Layout, Palette, Filter, ExternalLink } from "lucide-react";

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "ui-ux-design", label: "UI/UX Design" },
    { id: "mobile-apps", label: "Mobile Apps" },
  ];
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart functionality, user authentication, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <Layout size={20} />,
      link: "#",
      category: "web-development",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with a modern design.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      icon: <Palette size={20} />,
      link: "#",
      category: "ui-ux-design",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["React Native", "Firebase", "Redux", "Material UI"],
      icon: <Filter size={20} />,
      link: "#",
      category: "mobile-apps",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A real-time weather application with forecast data, location search, and interactive maps.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "OpenWeather API", "Chart.js"],
      icon: <Code size={20} />,
      link: "#",
      category: "web-development",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Slider Logic (Adapted from Skill component)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const loopProjects = [
    filteredProjects[filteredProjects.length - 1],
    ...filteredProjects,
    filteredProjects[0],
  ];
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isSmallScreen, filteredProjects]); // Add filteredProjects dependency

  useEffect(() => {
    if (!isSmallScreen) return;

    if (index === loopProjects.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 500);
    } else if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(loopProjects.length - 2);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [index, isSmallScreen, loopProjects]); // Add loopProjects dependency

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my latest work across web development, design, and application
          building.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.id)}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                selectedCategory === filter.id
                  ? "bg-gray-800 text-white border-transparent hover:bg-gray-1000"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>{" "}
      {/* Mobile Slider */}
      {isSmallScreen && (
        <div className="relative overflow-hidden w-full mb-8">
          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {loopProjects.map((project, i) => (
              <div key={i} className="w-full min-w-full px-2">
                <ProjectCard project={project} className="mx-2" />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Desktop Grid */}
      {!isSmallScreen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
      <div className="mt-12 text-center">
        <button
          onClick={() => setSelectedCategory("all")}
          className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          View All Projects
          <ExternalLink size={16} className="mt-0.5" />
        </button>
      </div>{" "}
    </section>
  );
};

export default ProjectSection;
