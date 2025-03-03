import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Code, Layout, Palette, Filter, ExternalLink } from "lucide-react";

const TestimonialOrbit = () => {
  const [selected, setSelected] = useState(0);
  const dragX = useMotionValue(0);
  const testimonials =[
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

  const orbitRadius = 400;
  const rotation = useTransform(dragX, [-800, 800], [-360, 360]);
  const containerRef = useRef(null);

  useEffect(() => {
    const unsubscribe = rotation.onChange((value) => {
      setSelected(Math.round((value % 360) / (360 / testimonials.length)));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-cyan-900 flex items-center justify-center overflow-hidden">
      <motion.div
        ref={containerRef}
        className="relative w-[800px] h-[800px] perspective-1000"
        style={{ rotate: rotation }}
        drag="x"
        dragConstraints={{ left: -800, right: 800 }}
        dragElastic={0.1}
      >
        {testimonials.map((testimonial, index) => {
          const angle = (index * 360) / testimonials.length;
          const x = orbitRadius * Math.cos((angle * Math.PI) / 180);
          const y = orbitRadius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={testimonial.id}
              className="absolute w-64 h-64 bg-black/30 backdrop-blur-lg rounded-xl border border-cyan-300/30 p-6 cursor-grab active:cursor-grabbing"
              style={{
                x,
                y,
                rotateZ: -rotation.get(),
                scale: selected === index ? 1.2 : 0.9,
                zIndex: selected === index ? 10 : 1,
              }}
              transition={{ type: 'spring', stiffness: 50 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 rounded-xl border border-cyan-300/20 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-xl" />
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-cyan-300 mb-4">{testimonial.text}</p>
                  <div className="mt-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4" />
                    <h3 className="text-lg font-bold text-cyan-100">{testimonial.name}</h3>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Central Orb */}
        <motion.div 
          className="absolute inset-0 m-auto w-48 h-48 bg-cyan-400/10 rounded-full border border-cyan-300/20 shadow-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 animate-hologram-glow" />
        </motion.div>
      </motion.div>
      <style>{`@keyframes hologram-pulse {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}

.animate-hologram-glow {
  background: radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.4), transparent 60%);
  animation: hologram-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`}</style>
    </div>
  );
};

// Add these keyframes to your Tailwind config

export default TestimonialOrbit;