import React from "react";
import "./style.css";

export default function Contact() {
  return (
    <div className="container my-5">
      <div className="row">
        <div id="info-box" className="col-md-8 mb-5 py-5">
          <h3>Contact Me</h3>
          <hr />
          <p>
            <a
              href="https://www.linkedin.com/in/patrick-ceriale-2537101b1/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/PatCeriale" target="_blank">
              <i className="fab fa-github-square"></i>
              GitHub
            </a>
          </p>
          <p>
            <a href="mailto: patceriale@gmail.com" target="_blank">
              <i className="fas fa-envelope-square"></i>
              Patceriale@gmail.com
            </a>
          </p>
          <h3>Or message me directly:</h3>
          <div className="container">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
