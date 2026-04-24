import React from 'react';
import './heroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';


export const HeroSection = ({ onContactClick }) => {
  return (
    <div className="hero-container">

      <div className="hero-content">
        <img src="/profile.jpg" alt="Muhammad Abdullah" className="profile-pic" />
        <h2>Hi! I'm <span className="highlight">Muhammad Abdullah</span> 👋</h2>
        <h1>frontend web developer<br />based in London.</h1>
        <p>
          Aspiring Full Stack Developer with hands-on experience in MERN stack technologies. Proficient in React, Node.js, Express.js, and MongoDB, with a strong focus on building responsive and user-friendly web applications. Eager to contribute to innovative projects and drive professional growth in the technology and web development industry.
        </p>

         <div className="btns">
          
        <div className="contact-btn">
          <button className="cta-button" onClick={onContactClick}>
            contact me <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="resume-btn">
            <a href="/Muhammad_Abdullah.pdf" download>
    <button className="cta-button">
      my resume <FontAwesomeIcon icon={faDownload} />
    </button>
  </a>
        </div>

         </div>

      </div>
    </div>
  );
};


