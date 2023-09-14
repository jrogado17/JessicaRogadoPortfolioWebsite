import React from 'react';
import './navbar.css';
import linkedinIcon from '../images/linkedinIcon.png'; 
import githubIcon from '../images/githubIcon.png'; 
import emailIcon from '../images/emailIcon.png'; 

const Navbar = () => {
  return (
    <nav>
      <div className='nameTitle'>
        <p id='name'>Jessica Rogado</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn"/>
        </a>
        <a href="mailto:jrogado23@yahoo.com">
          <img src={emailIcon} alt="Email" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
