import React from 'react';
import './welcome.css';


const Welcome = () => {
  return (
    <div className="welcomeContainer" id='welcomeText'>
      <div id='line' class="display-text-div">
        <h1 class="display-heading">Hi, I'm <span className="italic-text">Jessica Rogado</span></h1>
        <img src="https://uploads-ssl.webflow.com/62256e3694580b7ffbcea5c7/62282ae713de7f7a5a22cf77_flower-symbol.svg" 
        loading="lazy" alt="flower"class="flower-img"></img>
      </div>
      <div id='line'>
        <h1>a <span className="italic-text">Mechanical Engineer</span></h1>
      </div>
      <div id='line'>
        <h1>with a background of <span className="italic-text">Physics</span></h1>
      </div>
      <div id='line'>
        <h1>based in <span className="italic-text">Long Beach, CA</span></h1>
      </div>
      <div id='line'>
        <h1>specializing in <span className="italic-text">Software Development</span></h1>
      </div>
    </div>
  );
};

export default Welcome;
