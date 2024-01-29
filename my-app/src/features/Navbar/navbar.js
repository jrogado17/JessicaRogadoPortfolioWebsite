import * as React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import name from '../../images/name.png'

const Navbar = () => {
  return (
    <nav id='NavBar' role="banner">
      <div className='navbarContainer'>
        <Link to="/" id='name'>
        <img src={name} id='JR' alt="Logo" />
        </Link>
        <div className="navLinksContainer">
          <Link to="/about" className="navLink">
            About
          </Link>
          <Link to="/experience" className="navLink">
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
