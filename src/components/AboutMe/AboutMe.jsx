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
        I am a passionate Web Developer with strong expertise in HTML, CSS, and React.js. I specialize in building responsive and interactive user interfaces that deliver seamless user experiences. With a solid foundation in modern web technologies, I focus on clean code, component-based design, and performance optimization.
      </p>
      <p className="about-text">
      Whether it's crafting pixel-perfect layouts or integrating dynamic functionality, I take pride in delivering high-quality front-end solutions.
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

