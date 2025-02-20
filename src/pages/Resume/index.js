import './style.css';
import React, { useState, useEffect, useRef } from 'react';

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (iframeRef.current) {
      observerRef.current.observe(iframeRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className='container my-5 Resume' ref={iframeRef}>
      <div className='row'>
        <div id='info-box' className='col-sm-12 mb-5 py-5'>
          <h1>My Résumé</h1>
          <hr />
          <br />
          <div id='PDFdiv'>
            {isVisible ? (
              <iframe
                src='./CerialeResume.pdf'
                title='Resume PDF'
                id='resumePDF'
                width='100%'
                loading='lazy'
              />
            ) : (
              <p>Loading resume...</p>
            )}
            <br />
            <a href='/CerialeResume.pdf' download>
              <button className='resume-btn'>
                Download PDF <i className='fa-solid fa-download'></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
