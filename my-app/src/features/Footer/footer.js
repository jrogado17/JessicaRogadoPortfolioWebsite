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
            <div className="scroll-to-top">
        <button onClick={scrollToTop}>➮</button>
      </div>
    </footer>
  );
};

export default Footer;
