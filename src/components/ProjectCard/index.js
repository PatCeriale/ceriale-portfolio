import React from 'react';
import './style.css';

export default function ProjectCard(props) {
  const { name, image, description, github, preview } = props.project;
  console.log(props);
  return (
    <div className='ProjectCard'>
      <div className='flip-card m-2'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              id='portfolio-image'
              src={image}
              className='img-fluid thumbnail'
              alt={name}
            />
          </div>
          <div className='flip-card-back p-2'>
            <h6>Preview:</h6>
            <img
              id='portfolio-image'
              src={preview}
              className='img-fluid thumbnail'
              alt={name}
            />
            <br />
            <h6>Description:</h6>
            <p>{description}</p>
            <a href={github} target='_blank' rel='noreferrer'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
