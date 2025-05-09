import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

function Contacts() {
  return (
    <>
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <FontAwesomeIcon icon={faGithub} style={{color: "#B197FC",}} size='4x'/>
          <p><a href="mailto:varun.v011@hotmail.com">varun.v011@hotmail.com</a></p>
        </div>
        <div className="contact-info-container">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#74C0FC",}} size='4x'/>
          <p><a href="www.linkedin.com/in/varun-v-6b128b267">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
          <li><a href="#profile">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            
          </ul>
        </div>
      </nav>
     {/* <!--need share btn--> */}
    </footer>
    </>
  )
}

export default Contacts