import React, { useState, useEffect, useRef } from 'react';
import './landingpage.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef(null);

  const slides = [
    {
      title: 'About Me',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo leo sed justo ullamcorper, sed efficitur est pulvinar.',
    },
    {
      title: 'Skills',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo leo sed justo ullamcorper, sed efficitur est pulvinar.',
    },
    {
      title: 'Projects',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo leo sed justo ullamcorper, sed efficitur est pulvinar.',
    },
    {
      title: 'Education',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo leo sed justo ullamcorper, sed efficitur est pulvinar.',
    },
  ];

  const handleScroll = () => {
    const slideHeight = slideshowRef.current.clientHeight;
    const scrollTop = window.scrollY;
    const index = Math.floor(scrollTop / slideHeight) % slides.length; // Calculate the index with modulo operator
    setCurrentSlide(index);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const slideHeight = slideshowRef.current.clientHeight;
    window.scrollTo({
      top: currentSlide * slideHeight,
      behavior: 'smooth',
    });
  }, [currentSlide]);

  return (
    <div className="slideshow" ref={slideshowRef}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
        >
          <h2>{slide.title}</h2>
          <p>{slide.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
