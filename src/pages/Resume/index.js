import "./style.css";
import React, { useState } from "react";

// import { Document } from "react-pdf";
// import { PDFViewer } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="Resume">
      <div className="container my-5">
        <div className="row">
          <div id="info-box" className="col-md-8 mb-5 py-5">
            <div className="full-resume">
              <div className="resume-header">
                <h3>Patrick R. Ceriale</h3>
                <p>
                  {" "}
                  (805) 453-2264 |{" "}
                  <a href="mailto: Patceriale@gmail.com" target="_blank">
                    Patceriale@gmail.com
                  </a>{" "}
                  | Seattle, Washington <br />
                  <a href="https://github.com/PatCeriale" target="_blank">
                    {" "}
                    GitHub: http://bit.ly/cerialegit
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.linkedin.com/in/patrick-ceriale-2537101b1/"
                    target="_blank"
                  >
                    {" "}
                    LinkedIn: http://bit.ly/cerialeli
                  </a>
                  <br />
                  {/* TODO: add portfolio link */}
                  <a href="http://www.patrickceriale.me/" target="_blank">
                    {" "}
                    Portfolio: patrickceriale.me/
                  </a>
                </p>
                <hr />
              </div>
              <div className="resume-wordy-bits">
                <p>
                  <strong>Summary: </strong>
                  <br /> &emsp;&emsp;Full Stack Web Developer with a background
                  in Biology and a life-long dedication to learn anything and
                  everything. Experienced in HTML, CSS, JavaScript, MERN Stack
                  development, and responsive design. Played a crucial role in
                  the rapid expansion of multiple craft breweries. Excels at
                  attention to detail, time management, written/verbal
                  communication as well as problem solving. Experienced at
                  working successfully as an individual, team member, and
                  leader.
                  <br />
                  <br />
                  <strong>Technical Skills: </strong>
                  <br />
                  &emsp;&emsp;HTML5, CSS3, Foundation, Bootstrap, Bulma,
                  JavaScript ES6, jQuery, Express, Node.js, React.js, React
                  Native, MongoDB, Mongoose, MySQL, Sequelize, Handlebars, GIT,
                  GitHub, APIs, JSON, REST, AJAX, AXIOS, Microsoft Office,
                  Google Workspace, Zoom, Slack <br />
                  <br />
                  <strong>Projects: </strong>
                  <ul>
                    {" "}
                    <strong>Whale Hunter</strong> |{" "}
                    <a
                      href="https://github.com/PatCeriale/Whale-Hunter"
                      target="_blank"
                    >
                      GitHub: https://bit.ly/3jKBJL3{" "}
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://whalehunterbeer.herokuapp.com/"
                      target="_blank"
                    >
                      Deployed Link: https://bit.ly/37WWzES
                    </a>
                    <li>
                      Craft Beer discovery app with tracking, search engine and
                      social media aspects. Search beer by brewery or style and
                      save to user profile, share posts with user’s pictures to
                      main page
                    </li>
                    <li>Front End team, UX/UI design, beer sommelier</li>
                    <li>
                      JavaScript, CSS, Bulma, Express, Handlebars, Session,
                      Cloudinary, MySQL2, Sequelize
                    </li>
                  </ul>
                  <ul>
                    {" "}
                    <strong>Truck N’ Tasty </strong> |{" "}
                    <a href="https://bit.ly/3niy8GJ" target="_blank">
                      GitHub: https://bit.ly/3niy8GJ{" "}
                    </a>
                    |{" "}
                    <a href="https://bit.ly/37eSXNL" target="_blank">
                      Deployed Link: https://bit.ly/37eSXNL
                    </a>
                    <li>
                      Food truck finder app with map, search engine and user
                      account privileges. Using Google Maps and Places APIs,
                      find the location and other information of food trucks
                      near you!
                    </li>
                    <li>Front End team, UX/UI design </li>
                    <li>
                      JavaScript, CSS, React.js, Materialize UI, Express,
                      Bcrypt, MongoDB, Mongoose, Google API
                    </li>
                  </ul>
                  <ul>
                    {" "}
                    <strong>COVID-19 Resource Page</strong> |{" "}
                    <a
                      href="https://github.com/PatCeriale/Covid-19-Resource-Page"
                      target="_blank"
                    >
                      GitHub: https://bit.ly/3jGLcmX{" "}
                    </a>
                    |{" "}
                    <a
                      href="https://patceriale.github.io/Covid-19-Resource-Page/"
                      target="_blank"
                    >
                      Deployed Link: https://bit.ly/34EWlQC
                    </a>
                    <li>
                      COVID-19 pandemic resource page with up-to-date
                      statistics, peer reviewed articles, testing centers
                    </li>
                    <li>
                      Back End team, created AJAX requests to bring APIs to the
                      front end, JavaScript{" "}
                    </li>
                    <li>
                      HTML, CSS, Pure, JavaScript, AJAX, Bing COVID-19 Data API,
                      Springer Nature API
                    </li>
                  </ul>
                  <strong>Experience:</strong>
                  <br />
                  &emsp;&emsp;
                  <b>Production Manager/Head of the Barrel Program</b>
                  <ul>
                    <i>Urban Family Brewing Company, Seattle WA</i>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; May 2018 - July
                    2020
                    <li>
                      Managed the barrel aged and sour beer program. Created
                      over thirty unique beer recipes, including{" "}
                      <i>Vernal Bloom</i>, winning a gold medal at the 2019
                      Washington Brewers Festival
                    </li>
                    <li>
                      Mastered the mechanics of all brewing equipment and
                      utilized problem solving for installation, maintenance and
                      repairs as needed{" "}
                    </li>
                    <li>
                      Devised and implemented system to record inventories and
                      perform cost analysis of beers
                    </li>
                  </ul>
                  &emsp;&emsp;<b>Barrel Program Director/Specialty Brewer</b>
                  <ul>
                    <i>Telegraph Brewing Company, Santa Barbara, CA</i>
                    &emsp;&emsp;&emsp;&emsp;&emsp;May 2015 - March 2018
                    <li>
                      Designed and brewed all recipes for the barrel aged and
                      specialty beers during my tenure
                    </li>
                    <li>
                      Presented at symposiums and workshops on brewing
                      processes, techniques, and ideology
                    </li>
                  </ul>
                  <strong>Education:</strong>
                  <br />
                  &emsp;&emsp;University of Washington, Seattle <br />
                  &emsp;&emsp;&emsp;&emsp;&emsp; Full Stack Coding Boot Camp
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Date of
                  completion: November 24, 2020 <br />
                  &emsp;&emsp;California Polytechnic State University, San Luis
                  Obispo
                  <br />
                  &emsp;&emsp;&emsp;&emsp;&emsp;Bachelor of Science in Biology
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Date of
                  graduation: June 9, 2012
                </p>
              </div>
            </div>
            <a href="/images/CerialeResume.pdf" download>
              <button className="resume-btn">Download to PDF</button>
            </a>
          </div>
        </div>
      </div>
      <script></script>
    </div>
  );
}

export default Resume;
