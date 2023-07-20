// SkillCard.js
import React from 'react';
import './skillcard.css';

const SkillCard = ({ imageSrc, text }) => {
  return (
    <div className="skill-card">
      <img src={imageSrc} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default SkillCard;
