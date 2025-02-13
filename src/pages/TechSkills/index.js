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
            <div className='container skills-div'>
              <img
                id='skills-icon'
                alt='html'
                src='./images/logos/html5logo.png'
              ></img>
              <img
                id='skills-icon'
                alt='javascript'
                src='./images/logos/javascriptlogo.png'
              ></img>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='css'
                  src='./images/logos/css3logo.png'
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='react'
                  src='./images/logos/reactlogo.png'
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='node'
                  src='./images/logos/nodelogo.png'
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='mongodb'
                  src='./images/logos/mongodblogo.png'
                ></img>
              </div>
              <div className='item'>
                <img
                  id='skills-icon'
                  alt='github'
                  src='./images/logos/githublogo.png'
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
