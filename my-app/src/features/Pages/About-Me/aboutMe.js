// AboutMe.js
import React from 'react';
import './aboutMe.css';
import countries from './countries'; //
import Skills from './Skills/SWskills';
import SchoolSkills from './Skills/Schoolskills';
import Footer from '../../Footer/ScrollToTop/ScrollToTop';
import Contact from '../../Footer/Contact/contact';
import '../Welcome/welcome.css';

const AboutMe = () => {
  return (
    <div className='aboutmeContainer'>
      <h2 className='PageTitle' id='Introduction'>
      About Me 
      </h2>

      <div className='introduction-section'>
        <h2 className='title' id='Introduction'>
        Introduction 
        </h2>
        <p className='introduction-text'>
          Hey there! 👋 I'm Jessica Rogado, a 💡 versatile engineer with a background in Mechanical Engineering and Physics that empowers me to tackle complex challenges, turning them into innovative solutions. 🚀 After my journey at Rivian{' '}
          <img src='https://static.thenounproject.com/png/5383586-200.png' id='rivian-car' alt='Rivian Car' />, I seamlessly integrated into the world of software, seizing the opportunity to earn a certification in software development. 💻✨
        </p>
      </div>
      <div className='school-section'>
  <h2 className='title' id='Introduction'>
    School
  </h2>
  <p className='school-text'>
    I graduated{' '}
    <span id='school'>
      California State University, Long Beach
      <img
        src='https://digitalskills.cpace.csulb.edu/wp-content/uploads/cropped-cropped-favicon.png'
        loading='lazy'
        className='img'
        alt='CSULB Logo'
      />
    </span>{' '}
    with a{' '}
    <span id='ME'>
      B.S. in Mechanical Engineering
      <img
        src='https://static.vecteezy.com/system/resources/thumbnails/016/415/298/small/wrench-illustration-in-minimal-style-png.png'
        loading='lazy'
        className='img'
        alt='Mechanical Engineering Icon'
      />
    </span>{' '}
    and a{' '}
    <span id='ME'>
      B.A. in Physics
      <img
        src='https://icons.veryicon.com/png/o/education-technology/educational-icon/physics-4.png'
        loading='lazy'
        className='img'
        alt='Physics Icon'
      />
    </span>. I also completed{' '}
    <span>
      Fullstack Academy{' '}
      <img
        src='https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Grace-Hopper/GH-Full-Lockup-Chalk.png'
        loading='lazy'
        className='gh-img'
        alt='Fullstack Academy Icon'
      />
    </span>{' '}
    for a certification in{' '}
    <span id='SWE'>
      Software Development{' '}
      <img
        src='https://cdn-icons-png.flaticon.com/512/8759/8759045.png'
        loading='lazy'
        className='img'
        alt='Software Development Icon'
      />
    </span>.
  </p>
</div>

      <div className='skills-section'>
        <h2 className='title' id='Introduction'>
          Skills
        </h2>
        <p id='skills'>
          {/* <Skills /> */}
          {/* <SchoolSkills/> */}
        </p>
      </div>
      <div className='interestsContainer'>
  <h2 className='title' id='Introduction'> 
    Interests
  </h2>
  <div className='interests-text'>
    <p className='interests'>
      Beyond professional pursuits, I find fulfillment in outdoor activities like surfing
      <img
        src='https://cdn-icons-png.flaticon.com/512/3145/3145024.png' 
        className='interests-img'
        alt='Surfing Icon'
      /> and rock climbing
      <img
        src='https://static.thenounproject.com/png/4418673-200.png' 
        className='interests-img'
        alt='Rock Climbing Icon'
      />. I enjoy reading 
      <img
        src='https://cdn-icons-png.flaticon.com/512/2767/2767816.png' 
        className='interests-img'
        alt='Book Icon'
      /> and listening to podcasts. I'm all about spending time with my cat, Massie
      <img
        src='https://cdn3.iconfinder.com/data/icons/cat-pattern-colored/94/cat4-512.png' 
        className='interests-img'
        alt='Cat Icon'
      />. I love to solo backpack aboard
      <img
        src='https://cdn0.iconfinder.com/data/icons/digital-nomad-freelancer-aqua-vol-2/500/Solo_Travel-512.png'
        className='interests-img'
        alt='Travel Icon'
      />, and here's where I've been:
    </p>
    <ul className='country-list'>
      {countries.map((country, index) => (
        <li key={index}>
          <span>{country.name}</span>
          <img
            src={country.flag}
            className='flag-img'
            alt={`${country.name} Flag`}
          />
        </li>
      ))}
    </ul>
  </div>
</div>

      <Footer />
      <Contact/>
    </div>
  );
};

export default AboutMe;
