const Portfolio = () => {
  const projects = [
    { 
      img: process.env.PUBLIC_URL + "/images/project6.jpg", 
      title: 'E-commerce Platform' 
    },
    { 
      img: process.env.PUBLIC_URL + "/images/project5.jpg", 
      title: 'Fitness App' 
    },
    { 
      img: process.env.PUBLIC_URL + "/images/project4.jpg", 
      title: 'Travel Dashboard' 
    },
  ];

  return (
    <section className="portfolio">
      <h1>My Work</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img 
              src={project.img} 
              alt={project.title}
              className="portfolio-image"
              loading="lazy"
            />
            <div className="image-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;