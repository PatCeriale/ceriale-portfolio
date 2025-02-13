import React from 'react';
import ControlledCarousel from '../../components/Carousel/index';
import './style.css';

export default function About() {
  return (
    <div className='About'>
      <div className='container my-5'>
        <div className='row'>
          <div id='info-box' className='col-md-10 mb-5 py-5'>
            <h1>About Me</h1>
            <hr />
            <div id='row-one' className='row'>
              <div className='col-md-12'>
                {/* <ControlledCarousel
                // id="about-image"
                // className="responsive img-fluid thumbnail float-left"
                // style={{ width: "66.6%" }}
                /> */}

                <p>
                  Hello there! I am a Seattle-based Full-stack Developer with
                  expertise spanning the full development lifecycle, from
                  building dynamic user interfaces to designing and integrating
                  robust RESTful APIs. I specialize in{' '}
                  <b>
                    JavaScript frameworks like React, Next.js, and Node.js, as
                    well as SQL/NoSQL databases, responsive design, and
                    cloud-based technologies such as Azure and AWS.
                  </b>
                  <br />
                  <br />I have successfully led high-impact projects, including
                  the development of innovative, real-time applications for
                  multinational corporations and cloud migration initiatives
                  that enhanced system reliability. My experience collaborating
                  with cross-functional teams has resulted in delivering
                  scalable, performant, and user-centric solutions within agile
                  environments.
                  <br />
                  <br />I excel in attention to detail, time management,
                  communication, and problem-solving, thriving as an individual
                  contributor, a team member, and a leader. With a passion for
                  bridging design and development, I consistently deliver
                  seamless, accessible, and innovative digital experiences.
                </p>
              </div>
            </div>
            {/*<br />
            <h1>Technical Skills</h1>
            <hr />
             <div className='container skills-div'>
              {' '}
              <div className='item'></div>
              <img
                id='skills-icon'
                alt='html'
                src='./images/logos/html5logo.png'
                style={{ width: '100px', margin: '5px' }}
              ></img>
              <div className='item'></div>
              <img
                id='skills-icon'
                alt='javascript'
                src='./images/logos/javascriptlogo.png'
                style={{ width: '100px', margin: '5px' }}
              ></img>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='css'
                  src='./images/logos/css3logo.png'
                  style={{ width: '100px', margin: '5px' }}
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='react'
                  src='./images/logos/reactlogo.png'
                  style={{ width: '100px', margin: '5px' }}
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='node'
                  src='./images/logos/nodelogo.png'
                  style={{ width: '100px', margin: '5px' }}
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='mongodb'
                  src='./images/logos/mongodblogo.png'
                  style={{ width: '100px', margin: '5px' }}
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='github'
                  src='./images/logos/githublogo.png'
                  style={{ width: '100px', margin: '5px' }}
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='photoshop'
                  src='./images/logos/photoshoplogo.png'
                  style={{ width: '100px', margin: '5px' }}
                ></img>
              </div>
            </div> 

            <br />
            <br />
            <hr />
            <br />*/}
            <div className='row'>
              <div className='col-md-12'>
                {' '}
                <img
                  id='about-image'
                  src='./images/PoppyPicture.png'
                  className='responsive img-fluid thumbnail float-left'
                  alt='Puppy'
                  style={{ width: '66.6%' }}
                />
                <p>
                  A little bit more about me. I am an educated biologist who
                  played a crucial role in the rapid expansion of multiple craft
                  breweries. I am a husband, father, gardener and unprofessional
                  chef. Shown here is my dog, Poppy, surprisingly not eating.
                  She enjoys seeing the sights and smelling the smells while
                  hiking the many trails the Pacific North West has to offer, as
                  well as getting compliments on her heterochromatic eyes.
                </p>
                <br />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12' id='resumeHome'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
