import React, { useEffect, useState } from 'react';
import './landingpage.css';
import Navbar from './Navbar/navbar';
import Welcome from './Welcome/welcome';
import Footer from '../Footer/footer'

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div className="landing-page">
      <Navbar currentSection={activeSection} />
      <Welcome />
      <Footer />
    </div>
  );
};

export default LandingPage;
