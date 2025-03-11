import React from 'react';
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
                  that enhanced system reliability and user accessibility. My
                  experience collaborating with cross-functional teams has
                  resulted in delivering scalable, performant, and user-centric
                  solutions within agile environments.
                  <br />
                  <br />I excel in attention to detail, time management,
                  communication, and problem-solving, thriving as an individual
                  contributor, a team member, and a leader. With a passion for
                  bridging design and development, I consistently deliver
                  seamless, accessible, and innovative digital experiences.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
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
                  breweries. I am a husband, father of two, gardener,
                  unprofessional chef and even more unprofessional musician.
                  Shown here is my dog, Poppy, surprisingly not eating. She
                  enjoys seeing the sights and smelling the smells while hiking
                  the many trails the Pacific North West has to offer, as well
                  as getting compliments on her heterochromatic eyes.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
