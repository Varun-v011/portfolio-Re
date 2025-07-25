import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

function Projects() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dh7q7dmi8' } });
  const imageid1 = cld.image('aiml_car') 
  const imageid2 = cld.image('image-dehazing_ph1lwj') 
  const imageid3 = cld.image('attachment_115111577_edx9vg')

  
  return (
    <>
    
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <AdvancedImage cldImg={imageid1} style={{hieght: '300px', width: '400px'}}/>
            </div>
            <h2 className="experience-sub-title project-title">Adaptive Dehazing and Explainable AI for Robust Semantic Segmentation in Autonomous Driving</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                
              ><a href='https://github.com/Varun-v011/adapative-Image-Dehazing' style={{ textDecoration: 'none'}}>
                Github</a>
              </button>
              
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
            <AdvancedImage cldImg={imageid2} style={{hieght: '300px', width: '400px'}}/>
            </div>
            <h2 className="experience-sub-title project-title">Image dehazing using discrete wavelet transform </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                
              > <a style={{ textDecoration: 'none'}}>
                Github </a>
              </button>
              
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
            <AdvancedImage cldImg={imageid3} style={{hieght: '300px', width: '400px'}}/>
            </div>
            <h2 className="experience-sub-title project-title">Front-end of shopping website</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                
              ><a href='https://github.com/Varun-v011/plant-shop' style={{ textDecoration: 'none'}}>
                Github</a>
              </button>
              <button
                className="btn btn-color-2 project-btn"
                
              ><a href='https://plant-shop-chi.vercel.app' style={{ textDecoration: 'none'}}>
                Live Demo </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Projects