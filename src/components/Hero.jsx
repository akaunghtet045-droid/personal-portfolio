import React from 'react';
import '../css/Hero.css';
import myimage from '../assets/myimage.jpg'
import mycv from '../assets/cv.pdf'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h3>Hello, I'm</h3>
          <h1>Kyaw Yi Mon</h1>
          <h2>Frontend Developer / React Developer</h2>
          <p className="hero-desc">
            I craft clean, high-performance, and pixel-perfect digital user experiences. Focused on turning complex layout concepts into highly functional modern web designs.
          </p>
          <div className="hero-btns">
            
            <a href={mycv} download='Kyaw_yi_mon_Frontend_Developer_CV.pdf' className="btn-primary">Download CV</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            
            <img 
              src={myimage} 
              alt="kyaw yi mon Profile" 
              className="hero-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;