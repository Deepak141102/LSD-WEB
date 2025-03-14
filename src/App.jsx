import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import About from "./Pages/About/About";
// import PandaScene from "./components/PandaScene";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/panda"/element={< PandaScene/>} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;