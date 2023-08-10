import React from 'react';
import GraceHopper from '../images/GHFSA.png';
import CSULB from '../images/csulb.png';
import underline from '../images/underlin.png';
import './styling.css'

const Education = () => {
  return (
    <section id="education" className="section">
        <h2 className="section-heading">Education</h2>
        <img src={underline} alt='swiggle underline' className="underline" />
      <div className="education-description">
        <div className="school">
          <img src={GraceHopper} alt="Grace Hopper" className="school-image" />
          <p className="school-name">Grace Hopper School of Arts</p>
        </div>
        <div className="school">
          <img src={CSULB} alt="CSULB" className="school-image" />
          <p className="school-name">California State University, Long Beach</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
