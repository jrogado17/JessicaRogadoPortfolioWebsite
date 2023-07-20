// landingpage.js

import React, { useEffect, useState } from 'react';
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
        scrollPos >= (aboutMeSection?.offsetTop || 0) &&
        scrollPos < ((aboutMeSection?.offsetTop || 0) + (aboutMeSection?.offsetHeight || 0))
      ) {
        setActiveSection('about-me');
      } else if (
        scrollPos >= (skillsSection?.offsetTop || 0) &&
        scrollPos < ((skillsSection?.offsetTop || 0) + (skillsSection?.offsetHeight || 0))
      ) {
        setActiveSection('skills');
      } else if (
        scrollPos >= (projectsSection?.offsetTop || 0) &&
        scrollPos < ((projectsSection?.offsetTop || 0) + (projectsSection?.offsetHeight || 0))
      ) {
        setActiveSection('projects');
      } else if (
        scrollPos >= (educationSection?.offsetTop || 0) &&
        scrollPos < ((educationSection?.offsetTop || 0) + (educationSection?.offsetHeight || 0))
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

    // Scroll to the section when clicked
    const targetSection = document.getElementById(section);
    const offset = targetSection?.offsetTop || 0;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      <Navbar currentSection={activeSection} onSectionClick={handleSectionClick} />

      <section id="about-me" className={`section ${activeSection === 'about-me' ? 'active' : ''}`}>
        <h2 className="section-title">About Me</h2>
        {/* Your about me content goes here */}
      </section>

      <section id="skills" className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
        <h2 className="section-title">Skills</h2>
        {/* Your skills content goes here */}
      </section>

      <section id="projects" className={`section ${activeSection === 'projects' ? 'active' : ''}`}>
        <h2 className="section-title">Projects</h2>
        {/* Your projects content goes here */}
      </section>

      <section id="education" className={`section ${activeSection === 'education' ? 'active' : ''}`}>
        <h2 className="section-title">Education</h2>
        {/* Your education content goes here */}
      </section>
    </div>
  );
};

export default LandingPage;
