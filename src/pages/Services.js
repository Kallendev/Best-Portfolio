const Services = () => {
    const services = [
      { 
        title: "UI/UX Design", 
        description: "Creating intuitive and beautiful user experiences that drive engagement and conversion."
      },
      { 
        title: "Web Development", 
        description: "Building responsive, performant websites with modern technologies."
      },
      { 
        title: "Mobile App Design", 
        description: "Designing native mobile experiences that users love."
      },
    ];
  
    return (
      <section className="services">
        <h1>My Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;