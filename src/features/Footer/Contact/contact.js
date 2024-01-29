import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="get-in-touch">
      <h2 className='Contact' id='Introduction'>
        Get In Touch
      </h2>
      <div className='icon-container'>
        <a href="https://www.linkedin.com/in/j-rogado/" className='webIcons' target="_blank" rel="noopener noreferrer">
          <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912623/linkedin-icon-md.png" alt="LinkedIn" className="icon" />
        </a> 
        <a href="https://github.com/jrogado17" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
        </a> 
        <a href="https://www.goodreads.com/user/show/174724264-jess-rogado" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/4494/4494644.png" alt="Goodreads" className="icon" />
        </a> 
        <a href="mailto:jrogado23@yahoo.com">
          <img src="https://cdn0.iconfinder.com/data/icons/material-set-7-2/48/668-512.png" alt="Email" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
