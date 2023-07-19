import React, { useState, useEffect, useRef } from 'react';
import './landingpage.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef(null);
  const slideHeightRef = useRef(0);
  const sectionRefs = useRef([]);

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

  useEffect(() => {
    slideHeightRef.current = window.innerHeight;

    // Set up sectionRefs to store the references to each section
    sectionRefs.current = slides.map(() => React.createRef());
  }, [slides]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Calculate the current slide based on scroll position and slide height
    const index = Math.floor(scrollTop / slideHeightRef.current);

    setCurrentSlide(index);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const slideHeight = slideHeightRef.current;
    const targetScroll = currentSlide * slideHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  }, [currentSlide]);

  return (
    <>
      <div className="slideshow" ref={slideshowRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
            ref={sectionRefs.current[index]}
            style={{ height: `${slideHeightRef.current}px` }}
          >
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slideshow;
