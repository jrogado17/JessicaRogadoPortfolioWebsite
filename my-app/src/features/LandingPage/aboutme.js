import React from 'react';
import underline from '../images/underlin.png';

const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <h2 className="section-header">About Me</h2>
      <img src={underline} alt="swiggly underline" className="underline-divider1" />
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
