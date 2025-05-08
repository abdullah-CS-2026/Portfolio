import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export const Header = ()=> {
  return (
    <>
    <nav className="navbar">
      <div className="logo">Muhammad Abdullah<span className="dot">.</span></div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About me</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Work">My Work</a></li>
        <li><a href="#Contact">Get In Touch</a></li>
      </ul>
      <button className="contact-button">Contact <FontAwesomeIcon icon={faArrowRight}/> </button>
    </nav>
      </>
  )
}
