import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div className='container my-5 Contact'>
      <div className='row'>
        <div id='info-box' className='col-md-8 mb-5 py-5'>
          <h1>Contact Information</h1>
          <hr />
          <div id='about-links' className='row'>
            <div className='col-sm'>
              <p>
                <a
                  href='https://www.linkedin.com/in/patrick-ceriale-2537101b1/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='./images/linkedinlogo.png'
                    className='contactImage'
                    alt='linkedin'
                  />
                  <br />
                  LinkedIn
                </a>
              </p>
            </div>
            <div className='col-sm'>
              <p>
                <a
                  href='https://github.com/PatCeriale'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='./images/githublogoonly.png'
                    className='contactImage'
                    alt='github'
                  />
                  <br />
                  GitHub
                </a>
              </p>
            </div>
            <div className='col-sm'>
              <p>
                <a
                  href='mailto: patceriale@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src='./images/gmailicon.png'
                    className='contactImage'
                    alt='gmail'
                  />
                  <br />
                  Patceriale@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
