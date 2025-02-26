import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Resume from '../../pages/Resume';

export default function Footer() {
  return (
    <div className='Footer'>
      <footer className='card-footer text-muted'>
        <div className='container'>
          <a
            href='https://www.linkedin.com/in/patrick-ceriale-2537101b1/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn <i class='fa-brands fa-linkedin'></i> |{' '}
          </a>
          <a
            href='https://github.com/PatCeriale'
            target='_blank'
            rel='noreferrer'
          >
            GitHub <i class='fa-brands fa-square-github'></i> |{' '}
          </a>{' '}
          <a
            href='mailto: patceriale@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            Email <i class='fa-solid fa-envelope'></i>
          </a>
          {/* <Link to='/resume'> Resume</Link> */}
        </div>
      </footer>
    </div>
  );
}
