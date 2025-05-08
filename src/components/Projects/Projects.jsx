import React from 'react';
import projects from '../../assets/projects.json';
import './Projects.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AiFillGithub } from 'react-icons/ai';

export const Projects = () => {
  const sliderRef = React.useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="projects-section" id="Work">
      <h2 className="projects-title">My Work</h2>
      <p className="projects-subtitle">
        Showcasing my projects built using modern technologies including React.js and C++.
      </p>

      <div className="arrow left" onClick={() => scroll('left')}>
        <ArrowLeft size={24} />
      </div>
      <div className="arrow right" onClick={() => scroll('right')}>
        <ArrowRight size={24} />
      </div>

      <div className="projects-slider" ref={sliderRef}>
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p className="tech">{project.technology}</p>
            <p className="desc">{project.description}</p>
            <a target="_blank" className="github-button">
              <AiFillGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

