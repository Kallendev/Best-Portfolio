import React from 'react';

const Home = () => {
  // Manually add the base path if you're deploying under a subfolder like GitHub Pages
  const imagePath = `${process.env.NODE_ENV === 'production' ? '/Best-Portfolio' : ''}/images/kallenpassport.jpg`;

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1>Kallen.</h1>
          <h2>Software Engineer</h2>
          <div className="intro-text">
            <p>Hi, I'm Kallen</p>
            <p>Mugambi From Kenya</p>
          </div>
        </div>
        <div className="image-container">
          <img 
            src={imagePath}
            alt="Kallen Mugambi"
            className="profile-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
