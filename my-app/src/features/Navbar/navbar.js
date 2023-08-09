import React, { useState } from 'react';
import './navbar.css';
import hireImg from '../images/hireMe.png';
import logo from '../images/Logo.png';
import { Link } from 'react-scroll';

const Navbar = ({ currentSection, onSectionClick }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleOpenEmail = () => {
    window.location.href = 'mailto:jrogado23@yahoo.com';
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    onSectionClick(section);
    setIsPopupVisible(false); // Close the popup when a link is clicked
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav>
      <div
        className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
        onClick={handleToggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li className={`nav-link ${currentSection === 'about-me' ? 'active' : ''}`}>
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => handleLinkClick('about-me')}
          >
            About Me
          </Link>
        </li>
        <li className={`nav-link ${currentSection === 'skills' ? 'active' : ''}`}>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </Link>
        </li>
        <li className={`nav-link ${currentSection === 'projects' ? 'active' : ''}`}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </Link>
        </li>
        <li className={`nav-link ${currentSection === 'education' ? 'active' : ''}`}>
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => handleLinkClick('education')}
          >
            Education
          </Link>
        </li>
      </ul>
      <div
        className="hire-container"
        onMouseEnter={handleTogglePopup}
        onMouseLeave={handleTogglePopup}
        onClick={handleOpenEmail}
      >
        <img src={hireImg} alt="Hire Me" className="hire-image" />
        <button className="hire-me">CONTACT ME</button>
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
