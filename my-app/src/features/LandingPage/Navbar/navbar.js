import * as React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav id='NavBar' role="banner">
      <div className='navbarContainer'>
        <Link to="/" id='name'>
          JR
        </Link>
        <div className="navLinksContainer">
          <Link to="/about" className="navLink">
            About
          </Link>
          <Link to="/experience" className="navLink">
            Experience
          </Link>
          {/* <Link to="/projects" className="navLink">
            Projects
          </Link> */}
          {/* <Link to="/contact" className="navLink"> */}
            {/* Contact */}
          {/* </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
