import React, { useState } from 'react';
import './navbar.css';
import hireImg from '../images/hireMe.png';
import logo from '../images/Logo.png';

const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [jumping, setJumping] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleOpenEmail = () => {
    setJumping(true);
    setTimeout(() => {
      setJumping(false);
      window.location.href = 'mailto:jrogado23@yahoo.com';
    }, 1000);
  };

  return (
    <nav>
      <div id='name'>
        {/* <img src={logo} alt="Hire Me" className="logo-image" /> */}
      </div>
      <div
        className={`hire-container ${jumping ? 'jumping' : ''}`}
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
