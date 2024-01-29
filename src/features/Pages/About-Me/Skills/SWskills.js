import React, { useRef, useEffect } from 'react';
import SkillCard from './skillcard';
import jsImage from '../../../images/js.png';
import htmlImage from '../../../images/HTML.png';
import cssImage from '../../../images/css.png';
import expressjsImage from '../../../images/express-js.png';
import nodejsImage from '../../../images/nodeJS.png';
import reactImage from '../../../images/react.png';
import reduxImage from '../../../images/redux.png';
import gitImage from '../../../images/git.png';
import './skillcard.css';

const SWSkills = () => {
  const skillCardsContainerRef = useRef(null);
  const totalWidthRef = useRef(0);

  useEffect(() => {
    const calculateTotalWidth = () => {
      totalWidthRef.current = Array.from(skillCardsContainerRef.current.children).reduce(
        (total, card) => total + card.offsetWidth,
        0
      );
    };

    const slideSkills = () => {
      calculateTotalWidth();

      skillCardsContainerRef.current.style.transition = 'none';
      skillCardsContainerRef.current.style.transform = `translateX(${-totalWidthRef.current}px)`;

      requestAnimationFrame(() => {
        skillCardsContainerRef.current.style.transition = `transform ${(totalWidthRef.current /
          1000)}s linear`;
        skillCardsContainerRef.current.style.transform = 'translateX(0)';
      });
    };

    const cloneSkills = () => {
      const originalCards = Array.from(skillCardsContainerRef.current.children);
      originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        skillCardsContainerRef.current.appendChild(clone);
      });
    };

    slideSkills();
    cloneSkills();

    const intervalId = setInterval(() => {
      slideSkills();
      setTimeout(cloneSkills, 1000);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const skillCards = [
    { imageSrc: jsImage, text: 'JavaScript' },
    { imageSrc: htmlImage, text: 'HTML' },
    { imageSrc: cssImage, text: 'CSS' },
    { imageSrc: expressjsImage, text: 'ExpressJS' },
    { imageSrc: nodejsImage, text: 'NodeJS' },
    { imageSrc: reactImage, text: 'React' },
    { imageSrc: reduxImage, text: 'Redux' },
    { imageSrc: gitImage, text: 'Git' },
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

export default SWSkills;
