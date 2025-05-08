import React, { useState } from 'react';
import './ContactForm.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message sent!');
    // You can add your form submission logic here (like sending data to a backend)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section" id="Contact">
      <h1>Get in touch</h1>
      <p>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
          className='email'
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <textarea 
          name="message" 
          placeholder="Enter your message" 
          value={formData.message}
          onChange={handleChange}
          required 
        ></textarea>
        <button type="submit">Submit now →</button>
      </form>
    </div>
  );
};


