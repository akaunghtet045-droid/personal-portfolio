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
          <p>I enjoy building responsive and user-friendly websites using React.js. I learn by creating projects and solving real problems. My goal is to improve my frontend skills every day and become a professional software developer.</p>
        </div>
        
        <div className="glass-card">
          <h3>Skills</h3>
          <p>HTML, CSS, JavaScript, React.js, React Router, Git, GitHub, Responsive Design, API Integration, and basic TypeScript. I am currently learning by building real projects and improving my coding skills every day.</p>
        </div>

        <div className="glass-card">
          <h3>Career Goal</h3>
          <p>My goal is to become a skilled Frontend Developer and gain real-world experience through an internship. I believe continuous learning and building projects will help me grow into a professional software developer.</p>
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