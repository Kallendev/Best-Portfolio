import React from 'react';

const Portfolio = () => {
  const base = '/Best-Portfolio'; // hardcoded base path

  const projects = [
    { 
      img: `${base}/images/catadoption.JPG`, 
      title: 'CAT ADOPTION WEBSITE',
      link: 'https://kallendev.github.io/CATADOPTION/index.html'
    },
    { 
      img: `${base}/images/fundifix.JPG`, 
      title: 'FUNDIFIX WEBSITE',
      link: '' // empty = no link
    },
    { 
      img: `${base}/images/project4.jpg`, 
      title: 'ATTENDANCE TRACKER',
      link: '' // empty = no link
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

              {project.link ? (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View Project
                </a>
              ) : (
                <button 
                  className="view-button disabled"
                  disabled
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
