import React from 'react';
import welcomeImage from '../../images/Welcome.png'; 

const Welcome = () => {
  return (
    <section id="about-me" className="section">
      <img src={welcomeImage} alt="Welcome" /> 
      <p>
        I'm Jessica Rogado, a software engineer rooted in physics and mechanical engineering, now diving into full-stack development to fuel my tech-driven problem-solving passion.
      </p>
      <p id='lb'>Based in Long Beach, CA</p>
    </section>
  );
};

export default Welcome;
