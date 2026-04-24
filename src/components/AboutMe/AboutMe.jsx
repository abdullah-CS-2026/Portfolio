import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export function AboutMe() {
  return (
    <section className="about-section" id="About">
      <h2 className="section-title">ABOUT ME</h2>
      <h3 className="subtitle">
        Professional Web Developer Having 1 Years Of Experience
      </h3>
      <p className="about-text">
        I am a passionate MERN Stack Developer with strong expertise in MongoDB, Express.js, React.js, and Node.js. I specialize in building full-stack web applications with responsive and interactive user interfaces that deliver seamless user experiences. With a solid foundation in modern web technologies, I focus on clean code, scalable architecture, and performance optimization.
      </p>
      <p className="about-text">
      Whether it's designing efficient backend APIs or creating pixel-perfect front-end interfaces, I take pride in delivering high-quality full-stack solutions that combine robust server-side logic with engaging user experiences.
      </p>

      <div className="about-details">
        <div><strong>Name:</strong> Muhammad Abdullah</div>
        <div><strong>Age:</strong> 23 Years</div>
        <div><strong>Email:</strong> iamabdullah536@gmail.com</div>
        <div><strong>Address:</strong> Kirana View Town, Faisalabad Road, Sargodha</div>
      </div>

      <button className="download-btn">Download CV <FontAwesomeIcon icon={faDownload} /></button>
    </section>
  );
}

