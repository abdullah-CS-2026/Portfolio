import React from 'react';
import './heroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';


export const HeroSection = () => {
  return (
    <div className="hero-container">

      <div className="hero-content">
        <img src="/profile.jpg" alt="Muhammad Abdullah" className="profile-pic" />
        <h2>Hi! I'm <span className="highlight">Muhammad Abdullah</span> 👋</h2>
        <h1>frontend web developer<br />based in London.</h1>
        <p>
          I am a frontend developer from California, USA with 10 years of experience
          in multiple companies like Microsoft, Tesla and Apple.
        </p>

         <div className="btns">
          
        <div className="contact-btn">
          <button className="cta-button">
            contact me <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="resume-btn">
          <button className="cta-button">
            my resume <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>

         </div>

      </div>
    </div>
  );
};


