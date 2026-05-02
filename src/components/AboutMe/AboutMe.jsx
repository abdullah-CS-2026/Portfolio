import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export function AboutMe() {
  return (
    <section className="about-section" id="About">
      
      <div className="about-card">
        <h2 className="section-title">About Me</h2>

        <h3 className="subtitle">
          Professional Web Developer with 1 Year of Experience
        </h3>

        <p className="about-text">
          I am a passionate <span>MERN Stack Developer</span> with strong expertise in 
          MongoDB, Express.js, React.js, and Node.js. I specialize in building full-stack 
          web applications with responsive and interactive user interfaces.
        </p>

        <p className="about-text">
          Whether it's designing efficient backend APIs or creating pixel-perfect front-end 
          interfaces, I focus on delivering high-quality solutions with clean code and scalable architecture.
        </p>

        <div className="about-details">
          <div><strong>Name:</strong> Muhammad Abdullah</div>
          <div><strong>Age:</strong> 23 Years</div>
          <div><strong>Email:</strong> iamabdullah536@gmail.com</div>
          <div><strong>Address:</strong> Sargodha</div>
        </div>

        <button className="download-btn">
          Download CV <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>

    </section>
  );
}