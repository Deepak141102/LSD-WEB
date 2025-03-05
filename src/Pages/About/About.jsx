import React, { useState, useEffect } from 'react';
import { Code2, Users, Rocket, Brain, CheckCircle, ArrowRight } from 'lucide-react';
import StatsCounter from '../../components/StartCounter/StartCounter';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Beautiful, intuitive interfaces that users love"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications that scale"
    }
  ];

//   const stats = [
//     { value: "100+", label: "Projects Completed" },
//     { value: "50+", label: "Happy Clients" },
//     { value: "5+", label: "Years Experience" },
//     { value: "24/7", label: "Support" }
//   ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Crafting Digital Excellence
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We transform ideas into powerful digital solutions. Our passion for innovation
            and technical expertise drives us to create exceptional web experiences that
            help businesses thrive in the digital age.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div> */}
        <StatsCounter/>

        {/* Services Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="relative">
            <div className="flex justify-center items-start space-x-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`w-full max-w-sm p-6 rounded-xl transition-all duration-500 transform
                    ${index === activeService ? 'bg-blue-600 scale-105' : 'bg-gray-800 scale-95 opacity-75'}
                  `}
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="space-y-8">
            {[
              { icon: <Brain className="w-6 h-6" />, title: "Discovery & Planning" },
              { icon: <Code2 className="w-6 h-6" />, title: "Development" },
              { icon: <CheckCircle className="w-6 h-6" />, title: "Testing & QA" },
              { icon: <Rocket className="w-6 h-6" />, title: "Launch & Support" }
            ].map((step, index) => (
              <div key={index} className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <div className="h-1 w-full bg-gray-700 mt-2">
                    <div className="h-full bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;