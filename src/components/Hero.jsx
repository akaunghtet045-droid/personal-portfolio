import React from 'react';
import '../css/Hero.css';
import myimage from '../assets/myimage.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h3>Hello, I'm</h3>
          <h1>Kaung Htet Aung</h1>
          <h2>Frontend Developer / React Developer</h2>
          <p className="hero-desc">
            I craft clean, high-performance, and pixel-perfect digital user experiences. Focused on turning complex layout concepts into highly functional modern web designs.
          </p>
          <div className="hero-btns">
            {/* NOTE: Replace Resume PDF Link here for Download CV */}
            <a href="#download-cv" className="btn-primary">Download CV</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            {/* NOTE: Replace profile image placeholder source here */}
            <img 
              src={myimage} 
              alt="Wai Lynn Naing Profile" 
              className="hero-img" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;