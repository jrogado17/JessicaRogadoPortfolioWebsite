import React from 'react';

const HamburgerIcon = ({ isOpen, onClick }) => (
  <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </div>
);

export default HamburgerIcon;
