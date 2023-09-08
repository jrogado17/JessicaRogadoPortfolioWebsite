import React from 'react';
import welcomeImage from '../../images/Welcome.png'; 

const Welcome = () => {
  return (
    <section id="welcome" className="welcomeSection">
      <img src={welcomeImage} alt="Welcome" /> 
      <p id='welcomeText'>
        I'm Jessica Rogado, a software engineer rooted in physics and mechanical engineering, now diving into full-stack development to fuel my tech-driven problem-solving passion.
      </p>
      <p id='lb'>Based in Long Beach, CA</p>
    </section>
  );
};

export default Welcome;
