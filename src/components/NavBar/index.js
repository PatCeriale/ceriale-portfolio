import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function NavBar() {
  return (
    <div className='NavBar'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a href='#home' id='Patrick'>
          Patrick Ceriale
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a href='about'>About</a>{' '}
            </li>
            <li className='nav-item'>
              {' '}
              <a href='#portfolio'>Portfolio</a>{' '}
              {/* <Link to='/portfolio'>Portfolio</Link>{' '} */}
            </li>
            <li className='nav-item'>
              {' '}
              <a href='#contact'>Contact</a>{' '}
            </li>
            <li className='nav-item'>
              {' '}
              <a href='#resume'>Resume</a>{' '}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
