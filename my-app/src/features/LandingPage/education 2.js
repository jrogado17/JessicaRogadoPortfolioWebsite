import React from 'react';
import GraceHopper from '../images/GHFSA.png';
import CSULB from '../images/csulb.png';
import underline from '../images/underlin.png';
import './styling.css'

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-heading">Education</h2>
      <img src={underline} alt='swiggle underline' className="underline-divider3" />
      <div className="education-description schools"> {/* Add the "schools" class */}
        <div className="school">
          <img src={GraceHopper} alt="Grace Hopper" className="school-image" />
          <p className="school-name">Grace Hopper Fullstack Academy</p>
          <p id='education-description'>Certification of Completion</p>
          <br></br>
          <p id='education-description'>July 2023</p>
        </div>
        <div className="school">
          <img src={CSULB} alt="CSULB" className="school-image" />
          <p className="school-name">California State University, Long Beach</p>
          <p id='education-description'>B.S. Mechanical Engineering</p>
          <p id='education-description'>B.A. in Physics</p>
          <p id='education-description'>August 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
