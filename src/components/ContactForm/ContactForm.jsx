import React, { useState } from 'react';
import './ContactForm.css';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call - replace with your actual backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form Data:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section" id="Contact">
      <h1>Get in touch</h1>
      <p>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</p>
      
      {submitted && (
        <div className="success-message">
          ✓ Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {error && (
        <div className="error-message">
          ✗ {error}
        </div>
      )}
      
      {loading ? (
        <LoadingSpinner message="Sending your message..." />
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={loading}
            />
            <input 
            className='email'
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              required 
              disabled={loading}
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Enter your message" 
            value={formData.message}
            onChange={handleChange}
            required 
            disabled={loading}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit now →'}
          </button>
        </form>
      )}
    </div>
  );
};


