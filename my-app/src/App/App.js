import React from 'react';
import Navbar from '../features/LandingPage/Navbar/navbar';
import AppRoutes from './AppRoutes';
// import SlideShow from '../features/LandingPage/landingpage';

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      {/* <SlideShow /> */}
      <AppRoutes />
    </div>
  );
};

export default App;
