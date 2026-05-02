import React from 'react';
import './SkillsExperience.css';

import html_logo from '../../assets/html-logo.jpg';
import js_logo from "../../assets/javascript-logo.png";
import css_logo from "../../assets/css.png";
import nodejs_logo from "../../assets/nodejs-logo.png";
import react_logo from "../../assets/react-logo.jpg";
import cpp_logo from "../../assets/C++logo.jpeg";
import oop_logo from "../../assets/oop-logo.jpg";
import dsa_logo from "../../assets/dsa-logo.jpg";
import sql_logo from "../../assets/sql-logo.jpg";

export const SkillsExperience = () => {

  const skills = [
    { name: "HTML5", img: html_logo },
    { name: "CSS3", img: css_logo },
    { name: "JavaScript", img: js_logo },
    { name: "Node JS", img: nodejs_logo },
    { name: "React JS", img: react_logo },
    { name: "C++", img: cpp_logo },
    { name: "OOP", img: oop_logo },
    { name: "DSA", img: dsa_logo },
    { name: "SQL", img: sql_logo }
  ];

  return (
    <div className="skills-experience-container" id="Skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="skill-icon"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

{/* Experience Section
        <div className="experience-section">
          <div className="year-group">
            <div className="year">2022</div>
            <div className="experience-item">
              <div className="position">Senior Product Designer</div>
              <div className="company">Amazon Inc.</div>
            </div>
          </div>

          <div className="year-group">
            <div className="year">2020</div>
            <div className="experience-item">
              <div className="position">Senior WPA Frontend Developer</div>
              <div className="company">PRIVATO</div>
            </div>
            <div className="experience-item">
              <div className="position">COS Developer</div>
              <div className="company">Zara</div>
            </div>
            <div className="experience-item">
              <div className="position">Internship Frontend Developer</div>
              <div className="company">Apple</div>
            </div>
          </div>

          <div className="year-group">
            <div className="year">2021</div>
            <div className="experience-item">
              <div className="position">WMAX Web Designer</div>
              <div className="company">Google</div>
            </div>
          </div>
        </div> */}