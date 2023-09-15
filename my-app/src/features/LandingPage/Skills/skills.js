import React from 'react';
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
import header from '../../images/skillsHeader.png'
import './skillcard.css'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="skillsHeader">
            <img src={header} alt="Skills Header" />
      </div>
      <div className="skill-cards">
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
