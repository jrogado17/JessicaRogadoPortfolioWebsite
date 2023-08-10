// Projects.js

import React from 'react';
import underline from '../images/underlin.png';
import freebodyLogo from '../images/freebody.png';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-head">Projects</h2>
      <img src={underline} alt="swiggly underline" className="underline-divider2" />
      <div className="project-description">
      <h3 id='project-title'>Free Body</h3>
        <img src={freebodyLogo} alt="Free Body" className="free-body-image" />
        <p>
          Here's a description of the Free Body project. You can provide details about what the project is about, the technologies used, and any other relevant information.
          <br />
          <br />
          <div id="FBlinks">
            Check it out:
            <div id="links">
              <a href="https://free-body.onrender.com">Website</a>
              <a href="https://github.com/Free-Body/free-body" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a
                href="https://www.youtube.com/watch?v=PQD9T2r6pDw&list=PLx0iOsdUOUmlzmEB5MHyLNP9DHimAC2YJ&index=2&ab_channel=FullstackAcademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </div>
          </div>
        </p>
      </div>
    </section>
  );
};

export default Projects;
