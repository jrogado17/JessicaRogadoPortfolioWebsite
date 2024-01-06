import React, { useRef, useEffect } from 'react';
import SkillCard from './skillcard'; 
import jsImage from '../../images/js.png';
import htmlImage from '../../images/HTML.png';
import cssImage from '../../images/css.png';
import expressjsImage from '../../images/express-js.png';
import nodejsImage from '../../images/nodeJS.png';
import reactImage from '../../images/react.png';
import reduxImage from '../../images/redux.png';
import gitImage from '../../images/git.png';
import mathematicaImage from '../../images/mathematica.png';
import matlabImage from '../../images/matlab.png';
import simulinkImage from '../../images/simulink.png';
import solidworksImage from '../../images/solidworks.png';
import './skillcard.css';

const Skills = () => {
  const skillCardsContainerRef = useRef(null);

  useEffect(() => {
    const slideSkills = () => {
      skillCardsContainerRef.current.style.transition = 'transform 5s linear';
      skillCardsContainerRef.current.style.transform = 'translateX(-100%)';

      const resetTransition = () => {
        skillCardsContainerRef.current.style.transition = 'none';
        skillCardsContainerRef.current.style.transform = 'translateX(0)';
        // Use requestAnimationFrame to ensure the transition is applied after resetting
        requestAnimationFrame(() => {
          skillCardsContainerRef.current.style.transition = 'transform 5s linear';
          skillCardsContainerRef.current.style.transform = 'translateX(-100%)';
        });
      };

      // Use setTimeout to wait for the transition before resetting
      setTimeout(resetTransition, 5000);
    };

    const intervalId = setInterval(slideSkills, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="skills" className="section">
      <div className="skill-cards" ref={skillCardsContainerRef}>
        <SkillCard imageSrc={jsImage} text="JavaScript" />
        <SkillCard imageSrc={htmlImage} text="HTML" />
        <SkillCard imageSrc={cssImage} text="CSS" />
        <SkillCard imageSrc={expressjsImage} text="ExpressJS" />
        <SkillCard imageSrc={nodejsImage} text="NodeJS" />
        <SkillCard imageSrc={reactImage} text="React" />
        <SkillCard imageSrc={reduxImage} text="Redux" />
        <SkillCard imageSrc={gitImage} text="Git" />
        <SkillCard imageSrc={mathematicaImage} text="Mathematica" />
        <SkillCard imageSrc={matlabImage} text="Matlab" />
        <SkillCard imageSrc={simulinkImage} text="Simulink" />
        <SkillCard imageSrc={solidworksImage} text="SolidWorks" />
      </div>
    </section>
  );
};

export default Skills;
