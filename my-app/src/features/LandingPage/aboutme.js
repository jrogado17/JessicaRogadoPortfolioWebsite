import React from 'react';
import divider from '../images/divider.png';

const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <h2>About Me</h2>
      <img src={divider} alt="arrow" className="divider" />
      <p>
        A tech enthusiast and software developer with a solid foundation in mechanical engineering and physics,
        <br />
        I've transitioned my career toward full-stack development,
        <br />
        combining my love for technology with a knack for problem-solving.
        <br />
        <br />
        <br />
        Based in Long Beach, CA
      </p>
    </section>
  );
};

export default AboutMe;
