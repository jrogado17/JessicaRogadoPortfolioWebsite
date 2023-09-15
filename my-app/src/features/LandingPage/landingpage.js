import React, { useEffect, useState } from 'react';
import './landingpage.css';
import Navbar from '../Navbar/navbar';
import Welcome from './Welcome/welcome';
import AboutMe from './About-Me/aboutMe'
import Education from './Education/education'


const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div className="landing-page">
      <Navbar currentSection={activeSection} />
      <Welcome />
      <AboutMe />
      <Education />
    </div>
  );
};

export default LandingPage;
