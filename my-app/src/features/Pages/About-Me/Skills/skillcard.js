import React from 'react';
import './skillcard.css';

const SkillCard = ({ imageSrc, text, position, totalCards }) => {
  const isLastCard = position === totalCards - 1;

  return (
    <div className={`skill-card ${isLastCard ? 'last-card' : ''}`}>
      <img src={imageSrc} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default SkillCard;
