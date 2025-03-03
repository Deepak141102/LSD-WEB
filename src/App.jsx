import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
// import Dummy from "./components/Vite";
// import AnimatedTestimonialsDemo from "./components/Beat";
// import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Skill/>
      <Project/>
      <Testimonials/>
      {/* <Dummy/> */}
      <Footer/>
      {/* <AnimatedTestimonialsDemo/> */}
      


    
        </div>
  );
};

export default App;
