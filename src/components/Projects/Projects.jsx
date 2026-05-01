import React from 'react';
import projects from '../../assets/projects.json';
import './Projects.css';
import { AiFillGithub } from 'react-icons/ai';

export const Projects = () => {
  return (
    <section className="projects-section" id="Work">
      <div className="projects-container">
        <h2 className="projects-title">My Work</h2>
        <p className="projects-subtitle">
          Showcasing my projects built using modern technologies including React.js and C++.
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="tech">{project.technology}</p>
                <p className="desc">{project.description}</p>
                
                {project.toolsUsed && project.toolsUsed.length > 0 && (
                  <div className="tools-used">
                    <p className="tools-label">Tools Used:</p>
                    <div className="tools-badges">
                      {project.toolsUsed.map((tool, index) => (
                        <span key={index} className="tool-badge">{tool}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <AiFillGithub size={20} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

