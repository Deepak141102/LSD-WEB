import React, { useState, useEffect } from "react";
import { Figma, Palette, Lightbulb } from "lucide-react";
import { FaHtml5, FaJs, FaReact, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function SkillCard({ icon: Icon, title, level, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg ${color} mr-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color} bg-opacity-90`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <div className="mt-2 text-right text-sm text-gray-500">{level}%</div>
    </div>
  );
}

function Skill() {
  const skills = [
    { icon: Figma, title: "UI Design", level: 95, color: "bg-purple-600" },
    { icon: FaHtml5, title: "HTML", level: 90, color: "bg-orange-600" },
    { icon: FaJs, title: "JavaScript", level: 85, color: "bg-yellow-400" },
    {
      icon: RiTailwindCssFill,
      title: "Tailwind",
      level: 88,
      color: "bg-blue-400",
    },
    { icon: Palette, title: "Color Theory", level: 92, color: "bg-teal-600" },
    { icon: FaReact, title: "React js", level: 87, color: "bg-blue-600" },
    { icon: FaPhp, title: "PHP", level: 82, color: "bg-blue-800" },
    {
      icon: Lightbulb,
      title: "Design Thinking",
      level: 94,
      color: "bg-red-600",
    },
  ];

  // ✅ Screen size detect karne ke liye state
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Small screens ke liye slider logic
  const loopSkills = [skills[skills.length - 1], ...skills, skills[0]];
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (!isSmallScreen) return; // Only run on small screens

    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isSmallScreen]);

  useEffect(() => {
    if (!isSmallScreen) return;

    if (index === loopSkills.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, 500);
    } else if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(loopSkills.length - 2);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [index, isSmallScreen]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative bg-slate-950 -z-50">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Expertise
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            UI/UX Skills
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
            Crafting exceptional digital experiences through a blend of design
            thinking and technical expertise.
          </p>
        </div>

        {/* ✅ Small Screens → Slider || Large Screens → Grid */}
        {isSmallScreen ? (
          <div className="relative overflow-hidden w-full">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {loopSkills.map((skill, i) => (
                <div key={i} className="w-full min-w-full px-2">
                  <SkillCard
                    icon={skill.icon}
                    title={skill.title}
                    level={skill.level}
                    color={skill.color}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <SkillCard
                key={i}
                icon={skill.icon}
                title={skill.title}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
        )}

        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                I believe in creating intuitive, accessible, and delightful user
                experiences that solve real problems. My approach combines
                data-driven insights with creative exploration.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Every project begins with understanding user needs and business
                goals, followed by iterative design and continuous improvement.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-1000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                View Portfolio
              </button>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-lg object-cover h-96 w-full"
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="UI/UX Design Process"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
