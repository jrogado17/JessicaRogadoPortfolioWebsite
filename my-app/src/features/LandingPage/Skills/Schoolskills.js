import React, { useRef, useEffect } from 'react';
import SkillCard from './skillcard'; 
import './skillcard.css';

import mathematicaImage from '../../images/mathematica.png';
import matlabImage from '../../images/matlab.png';
import simulinkImage from '../../images/simulink.png';
import solidworksImage from '../../images/solidworks.png';
import './skillcard.css';

const SchoolSkills = () => {
  const skillCardsContainerRef = useRef(null);
  const totalWidthRef = useRef(0);

  useEffect(() => {
    const calculateTotalWidth = () => {
      // Calculate the total width of all cards
      totalWidthRef.current = Array.from(skillCardsContainerRef.current.children)
        .reduce((total, card) => total + card.offsetWidth, 0);
    };

    const slideSkills = () => {
      calculateTotalWidth();

      skillCardsContainerRef.current.style.transition = 'none';
      skillCardsContainerRef.current.style.transform = `translateX(${-totalWidthRef.current}px)`;

      // Use requestAnimationFrame for a smooth transition effect
      requestAnimationFrame(() => {
        skillCardsContainerRef.current.style.transition = `transform ${(totalWidthRef.current / 1000)}s linear`;
        skillCardsContainerRef.current.style.transform = 'translateX(0)';
      });
    };

    slideSkills();

    const intervalId = setInterval(slideSkills, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const skillCards = [
    { imageSrc: mathematicaImage, text: 'Mathematica' },
    { imageSrc: matlabImage, text: 'Matlab' },
    { imageSrc: simulinkImage, text: 'Simulink' },
    { imageSrc: solidworksImage, text: 'SolidWorks' },
  ];

  return (
    <section id="skills" className="section">
      <div className="skill-cards" ref={skillCardsContainerRef}>
        {skillCards.map((card, index) => (
          <SkillCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default SchoolSkills;
