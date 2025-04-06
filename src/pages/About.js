// pages/About.js
const About = () => {
  return (
    <section className="about">
      <h1>Pixel Perfectionist & <span className="accent">User Advocate</span></h1>
      
      <div className="about-content">
        <p className="lead-text">
          With 5+ years crafting digital experiences across 3 continents, I've evolved from a curious design student in Sydney to an award-winning UI/UX specialist collaborating with Fortune 500 companies and Silicon Valley startups. My work lives at the intersection of behavioral psychology and aesthetic precision - where every gradient, interaction, and whitespace decision is meticulously engineered to guide users home.
        </p>

        <div className="signature-points">
          <div className="point">
            <h3>🛠 Core Toolkit</h3>
            <p>Figma | Adobe XD | Webflow | Framer | React | GSAP | Lottie</p>
          </div>
          
          <div className="point">
            <h3>🏆 Recent Recognition</h3>
            <p>2023 Awwwards Site of the Day • CSS Design Awards Winner • Featured on Behance UI Top 100</p>
          </div>

          <div className="point">
            <h3>🌏 Design Philosophy</h3>
            <p>"Good design speaks the user's native language - I bridge cultural context with universal usability principles. My Australian roots keep my solutions fresh, bold, and unafraid to break conventions."</p>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="/portfolio" className="cta-btn">See My Work</a>
          <a href="/contact" className="cta-btn outline">Let's Collaborate</a>
        </div>
      </div>
    </section>
  );
};
  
  export default About;