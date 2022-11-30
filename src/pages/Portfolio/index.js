import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './style.css';
import projects from '../../projects.json';

export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='container my-5 portfolio'>
        <div className='row'>
          <div id='info-box' className='col-sm-12 mb-5 py-3'>
            <h1>Project Portfolio</h1>
            <hr />
            *Click on icons for app preview and description
          </div>
          <div className='row' id='card-info-box'>
            {/* <div className="d-flex flex-lg-row flex-column flex-wrap align-items-center"> */}
            {/* 
            {projects.map((i) => (
              <ProjectCard project={projects} key={i} />
            ))} */}
            <div className='d-flex flex-lg-row flex-column flex-wrap align-items-center'>
              <ProjectCard project={projects[0]} />

              <ProjectCard project={projects[1]} />
              <ProjectCard project={projects[2]} />
            </div>
            {/* <div className='d-flex flex-lg-row flex-column flex-wrap align-items-center'>
              <ProjectCard project={projects[2]} />

              <ProjectCard project={projects[3]} />
            </div> */}
            <div className='d-flex flex-lg-row flex-column flex-wrap align-items-center'>
              <ProjectCard project={projects[3]} />
              <ProjectCard project={projects[4]} />

              <ProjectCard project={projects[5]} />
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
