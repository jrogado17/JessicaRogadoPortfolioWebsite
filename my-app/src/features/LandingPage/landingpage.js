import React, { useEffect, useState } from 'react';
import './landingpage.css';
import Navbar from '../Navbar/navbar';
import Welcome from './Welcome/welcome';
import AboutMe from './About-Me/aboutMe'
import Education from './Education/education'
import Skills from './Skills/skills'
import WorkExperiences from './Work-Experiences/workexperiences'

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div className="landing-page">
      <Navbar currentSection={activeSection} />
      <Welcome />
      <AboutMe />
      <Education />
      <Skills />
      <WorkExperiences />
    </div>
  );
};

export default LandingPage;
