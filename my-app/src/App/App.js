import React from "react";
import Navbar from "../features/Navbar/navbar";
import AppRoutes from "./AppRoutes";
import ScrollEffect from "../features/LandingPage/nameSection";
import WavyText from "../features/LandingPage/wavytext";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <ScrollEffect />
      <WavyText/>
      <AppRoutes />
    </div>
  );
};

export default App;
