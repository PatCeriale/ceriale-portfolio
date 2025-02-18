import React from 'react';
import './style.css';

export default function TechSkills() {
  return (
    <div className='TechSkills'>
      <div className='container my-5'>
        <div className='row'>
          <div id='info-box' className='col-md-10 mb-5 py-5'>
            <h1>Technical Skills</h1>
            <hr />
            <p>
              <strong>Frontend: </strong>React.js, TypeScript, Angular, Next.js,
              JavaScript, jQuery, HTML/CSS, SCSS
            </p>
            <p>
              <strong>Backend: </strong>Node.js, Express.js, Rest APIs,
              Databases; SQL/NoSQL
            </p>
            <p>
              <strong>Tools: </strong>GitHub , Azure, Azure, AWS, Microsoft 365,
              Figma
            </p>
            <p>
              <strong>Additional: </strong>Agile Team Practices, Design & Build
              Enablement, DevOps, Wireframe & Prototype Creation, Effective
              Verbal and Written Communication Skills, Multidisciplinary Team
              Experience
            </p>
            <br />
            <div className='container skills-div'>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='react'
                  src='./images/logos/reactlogo.png'
                />
              </div>
              <img
                id='skills-icon'
                alt='html'
                src='./images/logos/html5logo.png'
              />
              <img
                id='skills-icon'
                alt='javascript'
                src='./images/logos/javascriptlogo.png'
              />
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='css'
                  src='./images/logos/css3logo.png'
                />
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='mongodb'
                  src='./images/logos/mongodblogo.png'
                />
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='node'
                  src='./images/logos/nodelogo.png'
                />
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='github'
                  src='./images/logos/githublogo.png'
                />
              </div>
              <div className='item'>
                <img id='skills-icon' alt='aws' src='./images/logos/aws.png' />
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='figma'
                  src='./images/logos/figma.png'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
