import React, { useState } from 'react';
import './navbar.css';
import hireImg from '../images/hireMe.png';

const Navbar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <nav>
        <div id='name'>
            <p>Jessica Rogado</p>
        </div>
      <div className="hire-container" onMouseEnter={handleTogglePopup} onMouseLeave={handleTogglePopup}>
      <img src={hireImg} alt="Hire Me" className="hire-image" />
        <p className="hire-me">HIRE ME</p>
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
