import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from '../features/Pages/Welcome/welcome'
import AboutMe from "../features/Pages/About-Me/aboutMe"; // Import the AboutMe component
import Experience from "../features/Pages/Work-Experiences/workexperiences"; // Import the Experience component
// import Projects from "../features/Projects/Projects"; // Import the Projects component
// import Contact from "../features/LandingPage/Contact/contact"; // Import the Contact component

const AppRoutes = () => {
  return (
    <div className="appRoutesContainer">
      <Routes>
        <Route path="/JessicaRogadoPortfolioWebsite" element={<Welcome />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
