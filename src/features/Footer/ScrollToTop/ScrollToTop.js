import React from 'react';
import './ScrollToTop.css'; 

const ScrollToTop = () => {
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

export default ScrollToTop;
