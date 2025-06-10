import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';


function Mainpg() {
  const cldImg=new Cloudinary({ cloud: { cloudName: 'dh7q7dmi8' } });
  const profPic=cldImg.image('20250510_133540_itgxr7')
  return (
    <>
    <section className='section-container'>
    <section id="profile">
      <div className="section__pic-container" style={{overflow:'auto', borderRadius: '50%', height: '380px', width: '350px'}}>
        <AdvancedImage cldImg={profPic} style={{width: '350px'}} />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title" style={{margin: '8px'}}>Varun V</h1>
        <p className="section__text__p2" >Software Developer</p>
        <div className="btn-container">
          
          <button style={{backgroundColor: '#1E90FF', borderRadius: '62vh'}}>
            <a href='./Varun-resume.pdf' download style={{ textDecoration: 'none'}}> Download CV</a>
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