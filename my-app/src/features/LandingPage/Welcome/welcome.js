import React from 'react';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcomeSection" id='welcomeText'>
      <div>
        <h1>I'm <span className="italic-text">Jessica Rogado</span>,</h1>
      </div>
      <div>
        <h1>a <span className="italic-text">Mechanical Engineer</span></h1>
      </div>
      <div>
        <h1>with a background of <span className="italic-text">Physics</span></h1>
      </div>
      <div>
        <h1>based in <span className="italic-text">Long Beach, CA</span></h1>
      </div>
      <div>
        <h1>specializing in <span className="italic-text">Software Development</span></h1>
      </div>
    </div>
  );
};

export default Welcome;
