import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './style.css';
import projects from '../../projects.json';

export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='container my-5 portfolio'>
        <div className='row'>
          <div id='info-box' className='col-md-10 mb-5 py-5 mx-auto'>
            <h1>Project Portfolio</h1>
            <hr />
            *Click on icons for screenshot and description
          </div>
          <div
            className='row col-md-10 mb-5 py-5 mx-auto d-flex justify-content-center'
            id='card-info-box'
          >
            {projects.map((project, index) => (
              <div key={index} className='col-xl-4 col-md-6 col-sm-12 mb-4'>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
