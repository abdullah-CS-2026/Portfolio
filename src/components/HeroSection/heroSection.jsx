import React from 'react';
import './heroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import profile_image from "../../assets/profile.jpg.jpeg"


export const HeroSection = ({ onContactClick }) => {
  return (
    <div className="hero-container">

      <div className="hero-content">
        <div className="profile-wrapper">
          <img
            src={profile_image}
            alt="Muhammad Abdullah"
            className="profile-pic"
          />
        </div>

        <h2>Hi! I'm <span className="highlight">Muhammad Abdullah</span> 👋</h2>

<h1>Full Stack MERN Developer</h1>

<p>
I build fast, scalable, and user-focused web applications using the MERN stack (MongoDB, Express.js, React, Node.js). 
From designing responsive frontends to developing secure backend APIs, I focus on writing clean code and solving real-world problems. 
Currently, I’m sharpening my skills by building full-stack projects and preparing for professional development roles.
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


