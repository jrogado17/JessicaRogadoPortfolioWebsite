import React from 'react';
import './aboutMe.css';
import Skills from './Skills/SWskills';
import SchoolSkills from './Skills/Schoolskills';
import Footer from '../../Footer/ScrollToTop/ScrollToTop';
import Contact from '../../Footer/Contact/contact';
import '../Welcome/welcome.css'
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
      {/* <p id='text-spikeAM'>✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹✹</p> */}
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
              <br />B.S. in Mechanical Engineering
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
            </span>
            <br />I also completed{' '}
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
            </span>
        </p>
      </div>
      <div className='skills-section'>
        <h2 className='title' id='Introduction'>
          Skills
        </h2>
        <p id='skills'>
          <Skills />
          <SchoolSkills/>
        </p>
      </div>
      <div className='interestsContainer'>
        <div className='interests-text'>
        <h2 className='title' id='Introduction'>
          Interests
        </h2>
          <p className='interests'>
            I love to surf
            <img
              src='https://cdn-icons-png.flaticon.com/512/3145/3145024.png' 
              className='flag-img'
              alt='Surfing Icon'
            /> and rock climb
            <img
              src='https://static.thenounproject.com/png/4418673-200.png' 
              className='flag-img'
              alt='Rock Climbing Icon'
            />
          </p>
          <p className='travel-info'>
            I love to solo backpack aboard!
            <img
                src='https://cdn0.iconfinder.com/data/icons/digital-nomad-freelancer-aqua-vol-2/500/Solo_Travel-512.png'
                className='flag-img'
                alt='Netherlands Flag'
              />
            Where I've been...
          </p>
          <ul className='country-list'>
          <ul className='country-list'>
            <li>
              <span>Netherlands</span>
              <img
                src='https://cdn-icons-png.flaticon.com/512/323/323275.png'
                className='flag-img'
                alt='Netherlands Flag'
              />
            </li>
            <li>
              <span>Denmark</span>
              <img
                src='https://cdn-icons-png.flaticon.com/512/197/197565.png'
                className='flag-img'
                alt='Denmark Flag'
              />
            </li>
            <li>
              <span>Italy</span>
              <img
                src='https://cdn1.iconfinder.com/data/icons/flags-of-the-world-2/128/italy-circle-512.png'
                className='flag-img'
                alt='Italy Flag'
              />
            </li>
            <li>
              <span>France</span>
              <img
                src='https://cdn-icons-png.flaticon.com/512/197/197560.png'
                className='flag-img'
                alt='France Flag'
              />
            </li>
            <li>
              <span>Scotland</span>
              <img
                src='https://cdn-icons-png.flaticon.com/512/197/197601.png'
                className='flag-img'
                alt='Scotland Flag'
              />
            </li>
            <li>
              <span>Norway</span>
              <img
                src='https://cdn-icons-png.flaticon.com/512/197/197579.png'
                className='flag-img'
                alt='Norway Flag'
              />
            </li>
            <li>
              <span>Portugal</span>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3909/3909361.png'
                className='flag-img'
                alt='Portugal Flag'
              />
            </li>
            <li>
              <span>Philippines</span>
              <img
                src='https://cdn-icons-png.flaticon.com/512/197/197561.png'
                className='flag-img'
                alt='Philippines Flag'
              />
            </li>
          </ul>
          </ul>
        </div>
      </div>
      <Footer />
      <Contact/>
    </div>
  );
};

export default AboutMe;
