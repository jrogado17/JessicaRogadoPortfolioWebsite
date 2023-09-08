import React, { useEffect, useState } from 'react';
import './landingpage.css';
import Navbar from '../Navbar/navbar';
import Welcome from './Sections/welcome'
// import Projects from './projects'; // Import the Projects component
// import Skills from './skills'; // Import the Skills component
// import Education from './education'; // Import the Education component
// import AboutMe from './aboutme'; // Import the AboutMe component


const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div className="landing-page">
      <Navbar currentSection={activeSection} />
      <Welcome />
      {/* <AboutMe />
      <Skills />
      <Projects />
      <Education /> */}
    </div>
  );
};

export default LandingPage;
