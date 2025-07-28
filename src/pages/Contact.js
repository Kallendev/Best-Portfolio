// pages/Contact.js
import { useState } from 'react';
import { FiDownload, FiMail, FiPhone, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // Reset message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-container">
      <h1 className="contact-heading">Let's Create Something Amazing</h1>
      
      <div className="contact-wrapper">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <div className="download-section">
            <a href="/cv.pdf" download className="download-btn">
              <FiDownload className="icon" />
              Download CV
            </a>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <FiMail className="icon" />
              <div>
                <h3>Email</h3>
                <p>kallenmugambi@gmail.com</p>
              </div>
            </div>

            <div className="detail-item">
              <FiPhone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+254740697607</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="success-message">
              <FiCheckCircle className="success-icon" />
              <h2>Thank you for your message!</h2>
              <p>I'll get back to you within 24 hours</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  className="form-input"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
export default Contact;