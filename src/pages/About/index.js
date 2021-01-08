import React from "react";
import ControlledCarousel from "../../components/Carousel/index";
import "./style.css";

export default function About() {
  return (
    <div className="About">
      <div className="container my-5">
        <div className="row">
          <div id="info-box" className="col-md-10 mb-5 py-5">
            <h1>About Me</h1>
            <hr />
            <div id="row-one" className="row">
              <div className="col-md-12">
                {/* <ControlledCarousel
                // id="about-image"
                // className="responsive img-fluid thumbnail float-left"
                // style={{ width: "66.6%" }}
                /> */}
                <img
                  id="about-image"
                  src="./images/PoppyPicture.png"
                  className="responsive img-fluid thumbnail float-left"
                  alt="Puppy Picture"
                  style={{ width: "66.6%" }}
                />
                <p>
                  Hello there! I am a recent graduate of the University of
                  Washington Full Stack Coding Boot Camp currently looking for a
                  full-time web development position to launch a career in the
                  Tech Industry. I am experienced in{" "}
                  <b>
                    HTML, CSS, JavaScript, MERN Stack development, and
                    responsive design
                  </b>
                  . I am an educated biologist who played a crucial role in the
                  rapid expansion of multiple craft breweries. I excel with
                  attention to detail, time management, written/verbal
                  communication as well as problem solving. I am experienced at
                  working successfully as an individual, team member, and
                  leader.
                </p>

                <p>
                  I have attached my resume at the top of this page, as well as
                  my most recent projects, located in the Project Portfolio tab.
                  Feel free to view these at your leisure, I hope you enjoy my
                  work. Don't hesitate to reach out via my contacts if you have
                  any questions.
                </p>
                <br />
              </div>
            </div>
            <hr></hr>
            <h1>Technical Skills</h1>
            <img
              id="skills-icon html"
              src="./images/logos/html5logo.png"
              style={{ width: "100px" }}
            ></img>
            <img
              id="skills-icon javascript"
              src="./images/logos/javascriptlogo.png"
              style={{ width: "100px" }}
            ></img>
            <img
              id="skills-icon css"
              src="./images/logos/css3logo.png"
              style={{ width: "100px" }}
            ></img>
            <img
              id="skills-icon react"
              src="./images/logos/reactlogo.png"
              style={{ width: "100px" }}
            ></img>
            <img
              id="skills-icon node"
              src="https://e7.pngegg.com/pngimages/540/810/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text.png"
              style={{ width: "100px" }}
            ></img>

            <div className="row">
              <div className="col-md-12">
                <p>
                  I am a husband, dog father, beer brewer and unprofessional
                  chef. Shown above is my dog, Poppy, surprisingly not eating.
                  She enjoys dragging me along while hiking the many trails the
                  Pacific North West has to offer, as well as getting
                  compliments on her heterochromatic eyes.
                </p>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" id="resumeHome"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
