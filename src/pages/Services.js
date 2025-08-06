import React from 'react';

const Services = () => {
    const services = [
      { 
        title: "UI/UX Design", 
        description: "Creating intuitive and beautiful user experiences that drive engagement and conversion."
      },
      { 
        title: "Software Development", 
        description: "Building responsive, performant softwares with modern technologies."
      },
      { 
        title: "Graphic Design", 
        description: "Brand identities, social media kits, posters, decks, and campaign visuals designed to be bold, consistent, and instantly recognizable."
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