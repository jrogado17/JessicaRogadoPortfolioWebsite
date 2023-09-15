import React from 'react';
import picture from '../../images/aboutmepic.png'
import header from '../../images/aboutMeHeader.png'
import './aboutMe.css'

const AboutMe = () => {
    return (
      <div className = 'aboutmeContainer'>
        <div className = 'aboutmeHeader'>
            <img src={header} alt="About Me Header" />
        </div>
        <div className="about-me">
            <div className="pictureofMe">
                <img src={picture} alt="Picture of Me" />
            </div>
            <div className="about-me-text">
                <h2 id='Introduction'>Introduction</h2>
                <p>
                 I'm Jess, a Software Engineer with a passion for creating innovative software solutions.
                 I specialize in full-stack development with an interest in machine learning and UX/UI.
                    I'm dedicated to solving complex problems through clean code and efficient software design.
                    I believe in staying up-to-date with industry best practices. This approach allows me to deliver
                    high-quality software that not only meets but exceeds expectations.
                </p>
            </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
