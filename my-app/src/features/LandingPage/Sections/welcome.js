import React from 'react';
import welcomeImage from '../../images/Welcome.png';
import './welcome.css'

const Welcome = () => {
  return (
    <section className="welcomeSection">
      <img src={welcomeImage} id="welcome" alt="Welcome" /> 
      <p id='welcomeText'>
        I'm Jessica Rogado, a software engineer rooted in physics and mechanical engineering, now diving into full-stack development to fuel my tech-driven problem-solving passion.
      </p>
      <p id='lb'>Based in Long Beach, CA</p>
    </section>
  );
};

export default Welcome;
