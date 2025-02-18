import './style.css';
import React from 'react';

function Resume() {
  return (
    <div className='container my-5 Resume'>
      <div className='row'>
        <div id='info-box' className='col-sm-12 mb-5 py-5'>
          <h1>My Résumé</h1>
          <hr /> <br />
          <div id='PDFdiv'>
            <iframe
              src='./CerialeResume.pdf'
              title='title'
              id='resumePDF'
            ></iframe>
            <br />
            <a href='/CerialeResume.pdf' download>
              <button className='resume-btn'>
                Download PDF <i class='fa-solid fa-download'></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
