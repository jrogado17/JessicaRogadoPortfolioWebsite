import React from "react";
import Navbar from "../features/Navbar/navbar";
import AppRoutes from "./AppRoutes";
import ScrollEffect from "../features/LandingPage/nameSection";
import Slideshow from "../features/LandingPage/landingpage";


const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <ScrollEffect />
      <Slideshow/>
      <AppRoutes />
    </div>
  );
};

export default App;
