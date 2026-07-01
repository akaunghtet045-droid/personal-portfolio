import React from 'react';
import '../css/About.css';

function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript (Basic)', 'Git', 'Responsive Design'];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-cards">
        <div className="glass-card">
          <h3>Passion</h3>
          <p>I thrive on turning design files into clean, dynamic application states. Writing logical, semantic components and scaling elegant code architecture is what drives me daily.</p>
        </div>
        
        <div className="glass-card">
          <h3>Skills</h3>
          <p>Proficient in structuring adaptive user interfaces using modern core tools. Specialized in declarative modular component handling within JavaScript environments.</p>
        </div>

        <div className="glass-card">
          <h3>Career Goal</h3>
          <p>Aiming to grow into a senior architect level role, helping design scalable systems and engineering efficient UI solutions alongside agile cross-functional product groups.</p>
        </div>
      </div>

      <div className="timeline-section">
        <h3>Learning Timeline & Stack</h3>
        <div className="timeline-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;