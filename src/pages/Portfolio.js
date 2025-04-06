const Portfolio = () => {
  const projects = [
    { img: '/images/project6.jpg', title: 'E-commerce Platform' },
    { img: '/images/project5.jpg', title: 'Fitness App' },
    { img: '/images/project4.jpg', title: 'Travel Dashboard' },
  ];

  return (
    <section className="portfolio">
      <h1>My Work</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.img} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;