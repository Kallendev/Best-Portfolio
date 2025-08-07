import React from 'react';

const Portfolio = () => {
  const projects = [
    { 
      img: `${process.env.PUBLIC_URL}/images/catadoption.png`, 
      title: 'CAT ADOPTION WEBSITE',
      link: 'https://kallendev.github.io/CATADOPTION/index.html'
    },
    { 
      img: `${process.env.PUBLIC_URL}/images/project5.jpg`, 
      title: 'FUNDIFIX WEBSITE',
      link: '#'
    },
    { 
      img: `${process.env.PUBLIC_URL}/images/project4.jpg`, 
      title: 'ATTENDANCE TRACKER',
      link: '#'
    },
  ];

  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">✨ My Work ✨</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img 
              src={project.img} 
              alt={project.title}
              className="portfolio-image"
              loading="lazy"
            />
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-button"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
