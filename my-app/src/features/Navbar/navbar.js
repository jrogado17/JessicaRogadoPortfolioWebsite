import * as React from "react";
import { Link} from "react-router-dom";
import './navbar.css';


const Navbar = () => {
  return (
    <nav id='NavBar' role="banner">
      <div className='navbarContainer'>
        <Link to="/" id='name'>
          JR
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;