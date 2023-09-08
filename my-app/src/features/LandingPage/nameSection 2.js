// import React, { useState } from 'react';
// import './nameSection-wavytext.css';
// import logo from '../images/Logo.png';

// const IntroText = () => {
//   const [jumping, setJumping] = useState(false);

//   const handleJump = () => {
//     setJumping(true);
//     setTimeout(() => {
//       setJumping(false);
//       window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
//     }, 1000);
//   };

//   return (
//     <div id="name-section">
//       <p className="hi">Hi! I'm</p>
//       <img src={logo} alt="Hire Me" className="logo-image" />
//       <button className={`explore ${jumping ? 'jumping' : ''}`} onClick={handleJump}>
//         Click to discover
//       </button>
//     </div>
//   );
// };

// export default IntroText;
