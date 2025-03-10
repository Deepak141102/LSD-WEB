"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-left relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container text-left z-10 dark:text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 "
        >
          Hi, We have{" "}
          <span className="text-primary block break-words text-purple-400">
            <TypeAnimation
              sequence={[
                "Designers", // Third word
                2000, // Wait for 2 seconds
                "Creators", // Fourth word
                2000, // Wait for 2 seconds
                "Problem Solvers", // Fifth word
                2000, // Wait for 2 seconds
                "Innovators", // Sixth word
                2000, // Wait for 2 seconds
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h1>
      </motion.div>
    </section>
  );
};
export default Hero;
