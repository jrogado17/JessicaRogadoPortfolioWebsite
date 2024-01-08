import React from 'react';
import SkillCard from './skillcard';
import './skillcard.css';

import mathematicaImage from '../../images/mathematica.png';
import matlabImage from '../../images/matlab.png';
import simulinkImage from '../../images/simulink.png';
import solidworksImage from '../../images/solidworks.png';

const SchoolSkills = () => {
  const skillCards = [
    { imageSrc: mathematicaImage, text: 'Mathematica' },
    { imageSrc: matlabImage, text: 'Matlab' },
    { imageSrc: simulinkImage, text: 'Simulink' },
    { imageSrc: solidworksImage, text: 'SolidWorks' },
  ];

  return (
    <section id="school-skills" className="school-section">
      <div className="school-skill-cards">
        {skillCards.map((card, index) => (
          <SkillCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default SchoolSkills;
