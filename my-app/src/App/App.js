import React from "react";
import Navbar from "../features/Navbar/navbar";
import AppRoutes from "./AppRoutes";
import ScrollEffect from "../features/LandingPage/nameSection";
import WavyText from "../features/LandingPage/wavytext";
import Slideshow from "../features/LandingPage/landingpage";


const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <ScrollEffect />
      <WavyText/>
      <Slideshow/>
      <AppRoutes />
    </div>
  );
};

export default App;
