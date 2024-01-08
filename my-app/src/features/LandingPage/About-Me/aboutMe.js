import React from 'react';
import './aboutMe.css';
import Skills from '../Skills/skills'; // Adjust the path based on the actual location of your Skills component

const AboutMe = () => {
  return (
    <div className='aboutmeContainer'>
      <div className='aboutmeHeader'></div>
      <div className='about-me'>
        <div className='pictureofMe'></div>
        <div className='about-me-text'>
          <h2 id='Introduction'>Welcome To my Page!</h2>
          <p></p>
          <p className='school'>
            I graduated{' '}
            <span id='school'>
              California State University, Long Beach
              <img src='https://digitalskills.cpace.csulb.edu/wp-content/uploads/cropped-cropped-favicon.png' loading="lazy" className="img" alt="CSULB Logo" />
            </span>{' '}
            with a{' '}
            <span id='ME'>
              B.S. in Mechanical Engineering
              <img src='https://static.vecteezy.com/system/resources/thumbnails/016/415/298/small/wrench-illustration-in-minimal-style-png.png' loading="lazy" className="img" alt="Mechanical Engineering Icon" />
            </span>{' '}
            and a {' '}
            <span>
            B.A. in Physics{' '}
              <img src='https://icons.veryicon.com/png/o/education-technology/educational-icon/physics-4.png' loading="lazy" className="img" alt="Physics Icon" />
            </span>
            . I also completed{' '}
            <span>
              Fullstack Academy{' '}
              <img src='https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Grace-Hopper/GH-Full-Lockup-Chalk.png' loading="lazy" className="gh-img" alt="Fullstack Academy Icon" />
            </span>{' '}
            for a certification industry {' '}
            <span id='SWE'>
              Software Development {' '}
              <img src='https://cdn-icons-png.flaticon.com/512/8759/8759045.png' loading="lazy" className="img" alt="Software Development Icon" />
            </span>
            <span id='skills'>
              where I learned ...
              <Skills />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
