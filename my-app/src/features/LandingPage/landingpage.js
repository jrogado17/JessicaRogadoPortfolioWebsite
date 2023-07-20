// LandingPage.js

import React, { useEffect, useState } from 'react';
import './landingpage.css';
import Navbar from '../Navbar/navbar';
import divider from '../images/divider.png';
import SkillCard from './skillcard'; // Import the SkillCard component
import jsImage from '../images/js.png';
import htmlImage from '../images/HTML.png';
import cssImage from '../images/css.png';
import expressjsImage from '../images/express-js.png';
import nodejsImage from '../images/nodeJS.png';
import reactImage from '../images/react.png';
import reduxImage from '../images/redux.png';
import gitImage from '../images/git.png';
import mathematicaImage from '../images/mathematica.png';
import matlabImage from '../images/matlab.png';
import simulinkImage from '../images/simulink.png';
import solidworksImage from '../images/solidworks.png';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Determine the active section based on scroll position
      const aboutMeSection = document.getElementById('about-me');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const educationSection = document.getElementById('education');

      if (
        scrollPos >= aboutMeSection.offsetTop &&
        scrollPos < aboutMeSection.offsetTop + aboutMeSection.offsetHeight
      ) {
        setActiveSection('about-me');
      } else if (
        scrollPos >= skillsSection.offsetTop &&
        scrollPos < skillsSection.offsetTop + skillsSection.offsetHeight
      ) {
        setActiveSection('skills');
      } else if (
        scrollPos >= projectsSection.offsetTop &&
        scrollPos < projectsSection.offsetTop + projectsSection.offsetHeight
      ) {
        setActiveSection('projects');
      } else if (
        scrollPos >= educationSection.offsetTop &&
        scrollPos < educationSection.offsetTop + educationSection.offsetHeight
      ) {
        setActiveSection('education');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <Navbar currentSection={activeSection} />
      <section id="blank" className="section">
        {/* <img src={arrow} alt="arrow" className="arrow-image" /> */}
      </section>
      <section id="about-me" className="section">
        <h2>About Me</h2>
        <img src={divider} alt="arrow" className="divider" /> 
        <p>
          A tech enthusiast and software developer with a solid foundation in mechanical engineering and physics, <br/>
          I've transitioned my career toward full-stack development, <br/> 
          combining my love for technology with a knack for problem-solving.
        <br/>
        <br/>
        <br/>Based in Long Beach, CA
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skill-cards">
          <SkillCard imageSrc={jsImage} text="JavaScript" />
          <SkillCard imageSrc={htmlImage} text="HTML" />
          <SkillCard imageSrc={cssImage} text="CSS" />
          <SkillCard imageSrc={expressjsImage} text="ExpressJS" />
          <SkillCard imageSrc={nodejsImage} text="NodeJS" />
          <SkillCard imageSrc={reactImage} text="React" />
          <SkillCard imageSrc={reduxImage} text="Redux" />
          <SkillCard imageSrc={gitImage} text="Git" />
          {/* New Skills */}
          <SkillCard imageSrc={mathematicaImage} text="Mathematica" />
          <SkillCard imageSrc={matlabImage} text="Matlab" />
          <SkillCard imageSrc={simulinkImage} text="Simulink" />
          <SkillCard imageSrc={solidworksImage} text="SolidWorks" />
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        {/* Your projects content goes here */}
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        {/* Your education content goes here */}
      </section>
    </div>
  );
};

export default LandingPage;
