import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from '../features/LandingPage/Welcome/welcome'
import AboutMe from "../features/LandingPage/About-Me/aboutMe"; // Import the AboutMe component
import Experience from "../features/LandingPage/Work-Experiences/workexperiences"; // Import the Experience component
// import Projects from "../features/Projects/Projects"; // Import the Projects component
// // // import Contact from "../features/Contact/Contact"; // Import the Contact component

const AppRoutes = () => {
  return (
    <div className="appRoutesContainer">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
