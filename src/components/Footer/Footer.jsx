import React from 'react';
import './Footer.css';

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Muhammad Abdullah</h2>
        <p className="footer-text">© {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.</p>
        <div className="footer-icons">
            
            <div className="github-block block">
            <AiFillGithub size={16}/>
          <a href="https://github.com/Abdullah-536" target="_blank" >GitHub</a>
            </div>
            <div className="LinkedIn-block block">
            <AiFillLinkedin size={16}/>
          <a href="https://www.linkedin.com/in/Muhammad Abdullah" target="_blank" >LinkedIn</a>
            </div>
            <div className="email-block block">
            <AiFillGoogleCircle size={16}/>
          <a href="mailto:iamabdullah536@gmail.com">Email</a>
            </div>
        </div>
      </div>
    </footer>
  );
};


