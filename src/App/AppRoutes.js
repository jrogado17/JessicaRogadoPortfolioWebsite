import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from '../features/Pages/Welcome/welcome';
import AboutMe from "../features/Pages/About-Me/aboutMe";
import Experience from "../features/Pages/Work-Experiences/workexperiences"; 
import { HashRouter } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div className="appRoutesContainer">
      <HashRouter basename="/JessicaRogadoPortfolioWebsite">
        <Route path="/" exact component={Welcome} />
        <Route path="/about" component={AboutMe} />
        <Route path="/experience" component={Experience} />
      </HashRouter>
    </div>
  );
};

export default AppRoutes;
