import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from '../features/Pages/Welcome/welcome'
import AboutMe from "../features/Pages/About-Me/aboutMe";
import Experience from "../features/Pages/Work-Experiences/workexperiences"; 

const AppRoutes = () => {
  return (
    <div className="appRoutesContainer">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
