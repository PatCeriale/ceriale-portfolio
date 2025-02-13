import React from 'react';
import './style.css';

export default function NavBar() {
  const handleNavClick = (event, id) => {
    event.preventDefault(); // Prevents default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='NavBar'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a href='#home' id='Patrick' onClick={(e) => handleNavClick(e, 'home')}>
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
              <a href='#about' onClick={(e) => handleNavClick(e, 'about')}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#portfolio'
                onClick={(e) => handleNavClick(e, 'portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' onClick={(e) => handleNavClick(e, 'contact')}>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a href='#resume' onClick={(e) => handleNavClick(e, 'resume')}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
