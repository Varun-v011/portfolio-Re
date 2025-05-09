import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, width } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

function Mainpg() {
  const cldImg=new Cloudinary({ cloud: { cloudName: 'dh7q7dmi8' } });
  const profPic=cldImg.image('profile-pic')
  return (
    <>
    <section className='section-container'>
    <section id="profile" style={{paddingLeft: '15vh'}}>
      <div className="section__pic-container" style={{overflow:'auto', borderRadius: '50%', height: '380px', width: '350px'}}>
        <AdvancedImage cldImg={profPic} style={{width: '350px'}} />
      </div>
      <div className="section__text" style={{paddingLeft: "10vh" }}>
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Varun V</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          
          <button style={{backgroundColor: '#1E90FF', borderRadius: '62vh'}}>
            <a href='./Varun-resume.pdf' download style={{color: 'white', textDecoration: 'none'}}> Download CV</a>
          </button>
          
          <a href='#contact'>
          <button type="button" className="btn btn-secondary">Contact</button>
          </a>
        </div>
        <div id="socials-container">

          <a href="https://www.linkedin.com/in/varun-v-6b128b267/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size='4x'/> </a>

          <a href="https://github.com/Varun-v011" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{color: "#B197FC",}} size='4x'/> </a>
        </div>
      </div>
    </section>
    {/* <FontAwesomeIcon className='faArrow' icon={faArrowDown} fade size='2x' /> */}
    </section>
    </>
  );
}

export default Mainpg