import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss,faSass,faJs,faUikit,faReact,faNode,faPython,faGithub,faBootstrap,} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import  icon from '../assets/icon.svg';
import icon2 from '../assets/icon2.svg'

function Experience() {
  return (
    <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
            <FontAwesomeIcon icon={faHtml5}size='2x' />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faCss}size='2x' />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faBootstrap}size='2x' />
              <div>
                <h3>Bootstrap</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faSass}size='2x' />
              <div>
                <h3>SASS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faJs}size='2x' />
              <div>
                <h3>JavaScript</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faUikit}size='2x' />
              <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faReact}size='2x' />
              <div>
                <h3>Reactjs</h3>
                <p>Intermediate</p>
              </div>
            </article>
            
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
           
            <article>
            <FontAwesomeIcon icon={faNode}size='2x' />
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={icon} />
              <div>
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faGithub}size='2x' />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
           
            <article>
            <FontAwesomeIcon icon={faPython}size='2x' />
              <div>
                <h3>Python</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <img src={icon2} style={{width:'2rem',filter: 'grayscale(100%)'}} />
              <div>
                <h3>Cpp</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faDatabase}size='2x' />
              <div>
                <h3>MySQL</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faDatabase}size='2x' />
              <div>
                <h3>MangoDB</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
            <FontAwesomeIcon icon={faDatabase}size='2x' />
              <div>
                <h3>PostgreSQL</h3>
                <p>Basic</p>
              </div>
            </article>
            
            
          </div>
        </div>
      </div>
    </div>
    {/* <FontAwesomeIcon icon={faArrowDown} className='faArrow' size='2x' style={{color:'red'}}/> */}
    </section>
  )
}

export default Experience