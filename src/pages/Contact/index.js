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
                >
                  <img
                    src='./images/linkedinlogo.png'
                    style={{ height: '100px', width: '100px' }}
                  ></img>
                  <br />
                  LinkedIn
                </a>
              </p>
            </div>{' '}
            <div className='col-sm'>
              <p>
                <a href='https://github.com/PatCeriale' target='_blank'>
                  <img
                    src='./images/githublogoonly.png'
                    style={{ height: '100px', width: '100px' }}
                  ></img>
                  <br />
                  GitHub
                </a>
              </p>
            </div>
            <div className='col-sm'>
              <p>
                <a href='mailto: patceriale@gmail.com' target='_blank'>
                  <img
                    src='./images/gmailicon.png'
                    style={{ height: '100px', width: '100px' }}
                  ></img>
                  <br />
                  Patceriale@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* <h3>Or message me directly:</h3>
          <form action={mailto:"contact@yourdomain.com"}
method=”POST”
enctype=”multipart/form-data”
name=”EmailForm”>
Name:<br>
<input type=”text” size=”19″ name=”ContactName”><br><br>
Message:<br> <textarea name=”ContactCommentt” rows=”6″ cols=”20″>
</textarea><br><br> <input type=”submit” value=”Submit”> </form> */}
          {/* <div className="container">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary">
              Submit
            </button> */}
        </div>
      </div>
    </div>
    // </div>
  );
}
