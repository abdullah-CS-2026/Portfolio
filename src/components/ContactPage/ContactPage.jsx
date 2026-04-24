import React, { useState } from 'react';
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const ContactPage = ({ onBackClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <button className="back-button" onClick={onBackClick}>
          ← Back
        </button>
        <h1>Get In Touch</h1>
        <p>I'd love to hear from you. Let's connect and create something amazing together!</p>
      </div>

      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info-section">
          <div className="info-box">
            <div className="info-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3>Email</h3>
            <p>Get in touch via email</p>
            <a href="mailto:iamabdullah536@gmail.com">iamabdullah536@gmail.com</a>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3>Phone</h3>
            <p>Call me directly</p>
            <a href="tel:+923413348205">+92 341 3348205</a>
          </div>

          <div className="info-box">
            <div className="info-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h3>Location</h3>
            <p>Based in</p>
            <a href="#">Lahore, Pakistan</a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h2>Send me a message</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-section">
        <h3>Connect With Me</h3>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};
