import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about">
      <h1>Creative Technologist & <span className="accent">User-Centered Thinker</span></h1>

      <div className="about-content">
        <p className="lead-text">
          Based in Kenya, I blend software engineering and graphic design to build meaningful digital products. From clean code to visual storytelling, I specialize in crafting solutions that are both functional and visually impactful. Whether designing in Adobe Photoshop or building full-stack apps with the MERN or PERN stack, I approach each project with precision, creativity, and purpose.
        </p>

        <div className="signature-points">
          <div className="point">
            <h3>🛠 Core Toolkit</h3>
            <p>Adobe Photoshop | Canva | Figma | React.js | Node.js | Express | MongoDB | PostgreSQL | Tailwind | TypeScript</p>
          </div>

          <div className="point">
            <h3>📌 Design & Dev Philosophy</h3>
            <p>
              "Design is how it feels. Code is how it works. My philosophy sits at the sweet spot — merging emotional connection with technical execution. I believe in designing with empathy and developing with scalability in mind. Every pixel and every line of code should solve a problem, tell a story, or spark a smile."
            </p>
          </div>

          <div className="point">
            <h3>🌱 My Journey</h3>
            <p>
              I started as a curious student passionate about tech and visual design. Over time, I’ve worked on a wide range of real-world projects — from academic portals and mobile-first UIs to creative branding for startups. Every project has grown my skillset, mindset, and impact.
            </p>
          </div>
        </div>

        <div className="cta-buttons">
          <Link to="/portfolio" className="cta-btn">See My Work</Link>
          <Link to="/contact" className="cta-btn outline">Let's Collaborate</Link>
          <Link to="/blog" className="cta-btn blog">📚 Kallen’s Corner</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
