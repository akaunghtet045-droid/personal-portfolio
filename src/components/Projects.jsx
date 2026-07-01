import React from 'react';
import '../css/Projects.css';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Todo App',
      desc: 'An advanced production todo tracking layout utilizing modern locally persisting object lists.',
      tech: ['React', 'CSS', 'JavaScript'],
      img: 'https://via.placeholder.com/400x200', // NOTE: Replace with todo.png source array references
      github: 'https://github.com/akaunghtet045-droid/To-Do-App', // NOTE: Replace GitHub link here
      live: 'https://to-do-app-rouge-beta.vercel.app/', // NOTE: Replace Live Demo here
      isAvailable: true
    },
    {
      id: 2,
      title: 'Weather App',
      desc: 'Real-time asynchronous weather prediction dashboards consuming accurate API endpoints securely.',
      tech: ['React', 'CSS', 'REST API'],
      img: 'https://via.placeholder.com/400x200', // NOTE: Replace with weather.png
      github: '#', // NOTE: Replace GitHub link here
      live: '#', // NOTE: Replace Live Demo here
      isAvailable: true
    },
    {
      id: 3,
      title: 'Product Search',
      desc: 'High performance structural product filtering layout UI utilizing instant item search parameters.',
      tech: ['React', 'CSS', 'State Management'],
      img: 'https://via.placeholder.com/400x200', // NOTE: Replace with product.png
      github: '#', // NOTE: Replace GitHub link here
      live: '#', // NOTE: Replace Live Demo here
      isAvailable: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      desc: 'Elegant, modern, light responsive glassmorphism based hub showcasing active designer applications.',
      tech: ['React', 'CSS', 'Vanilla Mechanics'],
      img: 'https://via.placeholder.com/400x200', // NOTE: Replace with portfolio.png
      github: 'https://github.com/akaunghtet045-droid/personal-portfolio', // NOTE: Replace GitHub link here
      live: 'https://personal-portfolio-smoky-two-78.vercel.app/',
      isAvailable: true
    },
    {
      id: 5,
      title: 'Coming Soon',
      desc: 'Future development project containing structural state configurations currently in layout phases.',
      tech: ['TBD'],
      isAvailable: false
    },
    {
      id: 6,
      title: 'Coming Soon',
      desc: 'Future development project containing structural state configurations currently in layout phases.',
      tech: ['TBD'],
      isAvailable: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className={`project-card ${!project.isAvailable ? 'coming-soon-card' : ''}`}>
            {project.isAvailable ? (
              <div className="project-img-container">
                <img src={project.img} alt={project.title} className="project-img" />
              </div>
            ) : (
              <div className="coming-soon-placeholder">🔒 Development Pending</div>
            )}
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>
              {project.isAvailable && (
                <div className="project-links">
                  <a href={project.github} className="project-btn github" target="_blank" rel="noreferrer">GitHub</a>
                  <a href={project.live} className="project-btn live" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;