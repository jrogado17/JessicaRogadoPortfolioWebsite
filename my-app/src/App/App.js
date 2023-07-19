import React from "react";
import Navbar from "../features/Navbar/navbar";
import AppRoutes from "./AppRoutes";
import IntroText from "../features/LandingPage/nameSection";
import SlideShow from '../features/LandingPage/landingpage'

const App = () => {
  return (
    <div className="appContainer">
      <IntroText />
      <SlideShow />
      <AppRoutes />
    </div>
  );
};

export default App;
