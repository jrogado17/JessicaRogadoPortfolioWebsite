import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './landingpage.css';
import Navbar from '../Navbar/navbar';

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

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="landing-page">
      <Navbar currentSection={activeSection} onSectionClick={handleSectionClick} />

      <section id="about-me" className={`section ${activeSection === 'about-me' ? 'active' : ''}`}>
        <h2>About Me</h2>
        {/* Your about me content goes here */}
      </section>

      <section id="skills" className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
        <h2>Skills</h2>
        {/* Your skills content goes here */}
      </section>

      <section id="projects" className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
        <h2>Projects</h2>
        {/* Your projects content goes here */}
      </section>

      <section id="education" className={`section ${activeSection === 'education' ? 'active' : ''}`}>
        <h2>Education</h2>
        {/* Your education content goes here */}
      </section>
    </div>
  );
};

export default LandingPage;
