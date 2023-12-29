import React from "react";
import AppRoutes from "./AppRoutes";
import SlideShow from '../features/LandingPage/landingpage'

const App = () => {
  return (
    <div className="appContainer">
      <SlideShow />
      <AppRoutes />
    </div>
  );
};

export default App;
