import React from 'react';
import './footer.css'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <footer className="footer">
      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>Feel free to connect with me on <a href="https://www.linkedin.com/in/j-rogado/">LinkedIn</a> or 
          reach out via email at <a href="mailto:jrogado23@yahoo.com">jrogado23@yahoo.com</a>.
        </p>
      </div>
      {/* <div className="scroll-to-top">
        <button onClick={scrollToTop}>Scroll to Top</button>
      </div> */}
    </footer>
  );
};

export default Footer;
