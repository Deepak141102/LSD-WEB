import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

const AnimatedTestimonialsDemo = () => {
  const testimonials = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart functionality, user authentication, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: "<Layout size={20} />", // Assuming Layout is a component or a placeholder
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
      icon: "<Palette size={20} />", // Assuming Palette is a component or a placeholder
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
      icon: "<Filter size={20} />", // Assuming Filter is a component or a placeholder
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
      icon: "<Code size={20} />", // Assuming Code is a component or a placeholder
      link: "#",
      category: "web-development",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
};
export default AnimatedTestimonialsDemo;
