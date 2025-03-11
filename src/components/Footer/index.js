import React from 'react';

export default function Footer({ onOpen }) {
  const handleThemeOpen = () => {
    onOpen();
  };

  return (
    <div className='Footer'>
      <footer className='card-footer text-muted'>
        <div className='footer-container'>
          <div className='footer-icon'>
            <button
              className='footer-icon'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/patrick-ceriale-2537101b1/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              <i className='fa-brands fa-linkedin'></i>
            </button>
            <button
              className='footer-icon'
              onClick={() =>
                window.open(
                  'https://github.com/PatCeriale',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              <i className='fa-brands fa-square-github'></i>
            </button>
            <button
              className='footer-icon'
              onClick={() =>
                (window.location.href = 'mailto:patceriale@gmail.com')
              }
            >
              <i className='fa-solid fa-envelope'></i>
            </button>
          </div>
          <button
            className='footer-theme-btn'
            onClick={() => handleThemeOpen()}
          >
            <i className='fa-solid fa-palette'></i>
            <span id='selectText'>Select Theme</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
