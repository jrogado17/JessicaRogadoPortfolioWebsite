import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import hireImg from '../images/hireMe.png';
import logo from '../images/Logo.png';

const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('about'); // Initialize with the first section

  const handleTogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleOpenEmail = () => {
    window.location.href = 'mailto:jrogado23@yahoo.com';
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <nav>
      <ul className="nav-links">
        <li
          className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
          onClick={() => handleSectionChange('about')}
        >
          About Me
        </li>
        <li
          className={`nav-link ${currentSection === 'skills' ? 'active' : ''}`}
          onClick={() => handleSectionChange('skills')}
        >
          Skills
        </li>
        <li
          className={`nav-link ${currentSection === 'projects' ? 'active' : ''}`}
          onClick={() => handleSectionChange('projects')}
        >
          Projects
        </li>
        <li
          className={`nav-link ${currentSection === 'education' ? 'active' : ''}`}
          onClick={() => handleSectionChange('education')}
        >
          Education
        </li>
      </ul>
      <div
        className="hire-container"
        onMouseEnter={handleTogglePopup}
        onMouseLeave={handleTogglePopup}
        onClick={handleOpenEmail}
      >
        <img src={hireImg} alt="Hire Me" className="hire-image" />
        <button className="hire-me">HIRE ME</button>
        {isPopupVisible && (
          <div className="popup">
            <p>
              Let's connect and explore how I can bring my technical knowledge and hands-on experience to your next innovative project.
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
