import React, { useState, useEffect } from 'react';
import './landingpage.css'


const ScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-effect ${isScrolled ? 'hidden' : ''}`}>
        <div id='name-section'>
            <p className="hi">Hi, I'm Jessica Rogado</p>
            <p className="explore">Scroll to learn about my projects, skills, and background</p>
        </div>
      <p className={`new-text ${isScrolled ? 'hidden' : ''}`}>
      </p>
    </div>
  );
};

export default ScrollEffect;
