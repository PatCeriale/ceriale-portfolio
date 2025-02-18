import './style.css';
import React from 'react';

function Resume() {
  return (
    <div className='Resume'>
      <div id='PDFdiv'>
        <div id='info-box' className='col-sm-12 mb-5 py-3'>
          <h1>My Résumé</h1>
          <hr />
        </div>
        <iframe src='./CerialeResume.pdf' title='title' id='resumePDF'></iframe>
        <a href='/CerialeResume.pdf' download>
          <button className='resume-btn'>
            Download to PDF <i class='fa-solid fa-download'></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
