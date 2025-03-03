import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

function TestimonialCard({ name, role, feedback, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <img className="w-16 h-16 rounded-full mr-4 object-cover" src={image} alt={name} />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">"{feedback}"</p>
      <div className="flex text-yellow-500">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="w-5 h-5" fill="currentColor" />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      feedback: "Absolutely loved the design and attention to detail! Highly recommended.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mark Thompson",
      role: "Software Engineer",
      feedback: "A great experience working together. The UI/UX skills are top-notch!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Carter",
      role: "Project Manager",
      feedback: "Professional and innovative approach to design. Very satisfied!",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const loopTestimonials = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];
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
  }, [isSmallScreen]);

  useEffect(() => {
    if (!isSmallScreen) return;

    if (index === loopTestimonials.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 500);
    } else if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(loopTestimonials.length - 2);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [index, isSmallScreen]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative bg-slate-950 -z-10">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
          What Clients Say
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
          Hear from people who have worked with me and experienced my design expertise firsthand.
        </p>
      </div>

      {isSmallScreen ? (
        <div className="relative overflow-hidden w-full">
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {loopTestimonials.map((testimonial, i) => (
              <div key={i} className="w-full min-w-full px-2">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  feedback={testimonial.feedback}
                  image={testimonial.image}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              feedback={testimonial.feedback}
              image={testimonial.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Testimonials;