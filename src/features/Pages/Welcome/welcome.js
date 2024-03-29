import React, { useEffect, useState } from 'react';
import './welcome.css';

const Welcome = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait for the page to fully load
    window.addEventListener('load', () => {
      // Add the 'loaded' class to trigger the slide-up effect
      setLoaded(true);
    });
  }, []);

  return (
    <div className={`welcomeContainer ${loaded ? 'loaded' : ''}`} id='welcomeText'>
      <div id='line1' className="display-text-div line slide-left" style={{animationDelay: '0.2s'}}>
        <h1 className="display-heading">Hi, I'm <span className="italic-text">Jessica Rogado</span>
          <img
            src="https://uploads-ssl.webflow.com/62256e3694580b7ffbcea5c7/62282ae713de7f7a5a22cf77_flower-symbol.svg"
            loading="lazy" alt="flower" className="flower-img">
          </img>
        </h1>
      </div>
      <div id='line2' className="display-text-div line slide-right" style={{animationDelay: '0.4s'}}>
        <h1 className="display-heading">a   
        <span class="text-spike">✹ </span>
        <span className="italic-text">Mechanical Engineer</span>
        <span class="text-spike"> ✹ </span>
        with a 
        </h1>
      </div>
      <div id='line3' className="display-text-div line slide-left" style={{animationDelay: '0.6s'}}>
        <h1 className="display-heading">background of <span className="italic-text">Physics</span> based in</h1>
      </div>
      <div id='line4' className="display-text-div line slide-right" style={{animationDelay: '0.8s'}}>
        <h1 className="display-heading">  <span className="italic-text">Long Beach, CA</span>

        <img
            src="https://uploads-ssl.webflow.com/62256e3694580b7ffbcea5c7/6228e1a8be59174091781f10_smiley-icon.svg" loading="lazy" data-w-id="6ea44d45-15b7-a2db-24f3-bdf76afe1fa1" 
            alt="smile icon" 
            className="smile-img">
          </img>
          specializing 
      </h1>
      </div>
      <div id='line5' className="display-text-div line slide-left" style={{animationDelay: '1.0s'}}>
        <h1 className="display-heading">in 
        <span class="text-star">✦ </span>
        <span className="italic-text">Software Development</span>
        <span class="text-star"> ✦ </span>
        </h1>
      </div>   
    </div>
  );
};

export default Welcome;
