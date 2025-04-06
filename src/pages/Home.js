// pages/Home.js
const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-container">
          <h1>Kallen.</h1>
          <h2>UI/UX Designer</h2>
          <div className="intro-text">
            <p>Hi, I'm Kallen</p>
            <p>Mugambi From Kenya</p>
          </div>
        </div>
        <div className="image-container">
          <img 
            src={process.env.PUBLIC_URL + "/images/kallen.png"} 
            alt="Kallen Mugambi" 
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;