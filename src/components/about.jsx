import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faGraduationCap, } from "@fortawesome/free-solid-svg-icons";
import Certificates from './certificates';
import { Cloudinary } from '@cloudinary/url-gen/index';
import { AdvancedImage } from '@cloudinary/react';


function About() {
  const [showCert, setShowCert] = useState(false);
  const cldImg=new Cloudinary({ cloud: { cloudName: 'dh7q7dmi8' } });
   const abtpic=cldImg.image('20241013_125215_e1wjup')

  return (
    <>
      <div className={`page-content ${showCert ? 'blurred' : ''}`}>
        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container1" style={{ }}>
              <AdvancedImage cldImg={abtpic} />
            </div>
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                  <h3>Education</h3>
                  <p>B.Tech Computer Science</p>
                  <p style={{margin: "0"}}>cgpa : 8.71</p>
                </div>
                <div className="details-container" style={{ position: "relative" }}>
                  <FontAwesomeIcon icon={faCertificate} beatFade size="2x" />
                  <h3>Certificates</h3>
                  <button onClick={() => {console.log('button clicked');setShowCert(true);}} style={{backgroundColor: '#6c757d', borderRadius: '5vh'}}>View Certificate</button>
                </div>
              </div>
              <div className="text-container">
                <p>
                  I am a Fullstack Developer with a passion for building creative, interactive user-friendly websites. I have a strong understanding of front-end development and am excited to put my skills to use in a professional setting.
                </p>
              </div>
            </div>
          </div>
          {/* <FontAwesomeIcon className='faArrow' icon={faArrowDown} fade size='2x' /> */}
        </section>
      </div>

      {showCert && (
        <>
          <div className="popup-overlay" onClick={() => setShowCert(false)} />
          <Certificates onClose={() => setShowCert(false)} />
        </>
      )}
    </>
  );
}

export default About;
