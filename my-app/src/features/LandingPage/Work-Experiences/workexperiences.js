import React from 'react';
import './workexperiences.css';
import header from '../../images/workexperienceHeader.png';
import Rivian from '../../images/Rivian.png'

const WorkExperiences = () => {
  return (
    <section className="work-experiences">
      <div className="workexperienceHeader">
        <img src={header} alt="Work Experience Header" />
      </div>
      <div className="experience1">
        <img src={Rivian} alt='Rivian Logo' id='Rivian'></img>
        <div className="position-title">Rotational (Trail) Engineer</div>
        <div className="month-date">July 2022 - Feb 2023</div>
        <div className='body'>
            <div className="experienceSection">
            <div className="subtitle">EPA Certification Support:</div>
            <div className="body-content">
                <p>
                I contributed significantly by ensuring compliance with EPA certification testing and analysis standards and regulations.
                This compliance was crucial for the successful launch of multiple car programs, as it helped meet environmental requirements
                and gain necessary certifications.
                </p>
            </div>
            </div>

            <div className="experienceSection">
            <div className="subtitle">Simulated Range Forecasts:</div>
            <div className="body-content">
                <p>
                I effectively utilized AMSIMs software to deliver accurate and comprehensive simulated range forecasts.
                These forecasts played a pivotal role in supporting data-driven decision-making processes and enabling
                program-level changes for current and future programs.
                </p>
            </div>
            </div>
            <div className="experienceSection">
            <div className="subtitle">Influential Data:</div>
            <div className="body-content">
                <p>
                The numbers generated through my work had a substantial impact on high-stake decisions made by key stakeholders regarding
                future programs. This data not only provided valuable insights but also shaped the direction of critical projects.
                </p>
            </div>
            </div>
            <div className="experienceSection">
            <div className="subtitle">Cross-Team Collaboration:</div>
            <div className="body-content">
                <p>
                My role fostered cross-collaboration with numerous other teams within the organization.
                This collaborative approach was essential for coordinating efforts, sharing insights,
                and ensuring the success of our programs.
                </p>
            </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default WorkExperiences;
