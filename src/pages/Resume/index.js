import './style.css';
import React, { useState } from 'react';

// import { Document } from "react-pdf";
// import { PDFViewer } from "@react-pdf/renderer";
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className='Resume'>
      <div id='PDFdiv'>
        <div id='info-box' className='col-sm-12 mb-5 py-3'>
          <h1>My Résumé</h1>
          <hr />
        </div>{' '}
        <iframe src='./CerialeResume.pdf' title='title' id='resumePDF'></iframe>
        <a href='/CerialeResume.pdf' download>
          <button className='resume-btn'>Download to PDF</button>
        </a>
      </div>
      {/* <div className='container my-5'>
        <div className='row'>
          <div id='info-box' className='col-md-8 mb-5 py-5'>
            <div className='full-resume'>
              <div className='resume-header'>
                <h3>Patrick R. Ceriale</h3>
                <p>
                  (805) 453-2264 |{' '}
                  <a href='mailto: Patceriale@gmail.com' target='_blank'>
                    Patceriale@gmail.com
                  </a>{' '}
                  | Seattle, Washington <br />
                  <a href='https://github.com/PatCeriale' target='_blank'>
                    GitHub: http://bit.ly/cerialegit
                  </a>{' '}
                  |{' '}
                  <a
                    href='https://www.linkedin.com/in/patrick-ceriale-2537101b1/'
                    target='_blank'
                  >
                    LinkedIn: http://bit.ly/cerialeli
                  </a>
                  <br />
                  <a href='http://www.patrickceriale.me/' target='_blank'>
                    Portfolio: patrickceriale.me/
                  </a>
                </p>
                <hr />
              </div>
              <div className='resume-wordy-bits'>
                <p>
                  <strong>Summary: </strong>
                  <br /> &emsp;&emsp;Patrick is a Seattle-based Full-stack
                  developer with experience in the full range of applications
                  from creating dynamic user interfaces to RESTful APIs from
                  inception to deployment. He particularly enjoys the creative
                  aspect of Front-end development and has a passion for building
                  innovative and beautiful applications in a team environment.
                  He shows strength in problem solving, team collaboration, and
                  attention to detail.
                  <br />
                  <br />
                  <strong>Technical Skills: </strong>
                  <br />
                  &emsp;&emsp;React.js, Angular, Vue.js, JavaScript, TypeScript,
                  Azure, HTML/CSS, jQuery, Express.js, Node.js, SQL/NoSQL
                  Databases, GitHub, Azure DevOps, Rest APIs, Microsoft 365,
                  Agile Team Practices, Design & Build Enablement
                  <br />
                  <br />
                  <strong>Projects: </strong>
                  <br />
                  <i>
                    Government Organization - Avanade Full-Stack Developer,
                    Consultant
                  </i>
                  <ul>
                    <i>
                      <strong>
                        Relevant Technologies: JavaScript, ReactJS, HTML/CSS,
                        Modern SharePoint, Azure DevOps
                      </strong>
                    </i>
                    <li>
                      Updated a government employee intranet to Modern
                      SharePoint with custom React webparts. Enabled employees
                      to consolidate multiple sources into central hub, allowing
                      easier access to important information from one location
                    </li>
                    <li>
                      Integrated React apps to client’s SharePoint tenant,
                      allowing users to consume data queried from the client
                      Azure Active Directory, SharePoint lists and third-party
                      APIs.
                    </li>
                    <li>
                      Collaborated with SharePoint Architect to create efficient
                      React webparts, according to the client’s requirements
                    </li>
                    <li>
                      Conducted live demos with client, answering questions
                      regarding development and easing any production concerns
                    </li>
                  </ul>
                  <i>
                    Multinational Technology Corporation - Avanade Full-Stack
                    Developer, Consultant
                  </i>
                  <ul>
                    <i>
                      <strong>
                        Relevant Technologies: Elixir/Phoenix, JavaScript, Azure
                        DevOps, RESTful APIs​
                      </strong>
                    </i>
                    <li>
                      Updated a multinational tech corporation’s application to
                      function more efficiently and accurately using the
                      client’s obscure tech stack: Elixir and Phoenix
                    </li>
                    <li>
                      Implemented web sockets, allowing for a more logical
                      approach to client-server communication
                    </li>
                    <li>
                      Enabled client use data collection using New Relic,
                      granting optimization at high traffic times
                    </li>
                  </ul>
                  <i>
                    Healthcare Organization - Avanade User Experience Engineer,
                    Consultant
                  </i>
                  <ul>
                    <i>
                      <strong>
                        Relevant Technologies: JavaScript, HTML5, CSS3, Power
                        Portals, Power Platforms, Microsoft Dynamics​
                      </strong>
                    </i>
                    <li>
                      Accountable for prototype work and other software
                      engineering solutions that create an optimized user
                      experience.
                    </li>
                    <li>
                      Translated design concepts to prototype solutions as
                      quickly and tangibly as possible, with a balanced
                      understanding of technical feasibility implications and
                      design intent.
                    </li>
                    <li></li>
                  </ul>
                  <strong>Experience:</strong>
                  <br />
                  &emsp;&emsp;
                  <b>Full-Stack Developer</b>
                  <ul>
                    <i>Avanade Inc., Seattle WA</i>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp; April 2021 - Present
                    <li>
                      Drive the delivery of front-end development, user
                      experience and deep back-end integrations for digital
                      products and services
                    </li>
                    <li>
                      Work in an agile and lean environment to build new digital
                      solutions for clients throughout a variety of technology
                      stacks
                    </li>
                    <li>
                      Collaborate with developers, testers, and the scrum master
                      to build new, well-crafted software and digital
                      experiences
                    </li>
                  </ul>
                  &emsp;&emsp;
                  <b>Production Manager/Head of the Barrel Program</b>
                  <ul>
                    <i>Urban Family Brewing Company, Seattle WA</i>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; May 2018 -
                    July 2020
                    <li>
                      Managed the barrel aged and sour beer program. Created
                      over thirty unique beer recipes, including{' '}
                      <i>Vernal Bloom</i>, winning a gold medal at the 2019
                      Washington Brewers Festival
                    </li>
                    <li>
                      Mastered the mechanics of all brewing equipment and
                      utilized problem solving for installation, maintenance and
                      repairs as needed{' '}
                    </li>
                    <li>
                      Devised and implemented system to record inventories and
                      perform cost analysis of beers
                    </li>
                  </ul>
                  &emsp;&emsp;<b>Barrel Program Director/Specialty Brewer</b>
                  <ul>
                    <i>Telegraph Brewing Company, Santa Barbara, CA</i>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;May 2015 - March
                    2018
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
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  November 24, 2020 <br />
                  &emsp;&emsp;California Polytechnic State University, San Luis
                  Obispo
                  <br />
                  &emsp;&emsp;&emsp;&emsp;&emsp;Bachelor of Science in Biology
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  June 9, 2012 &emsp;&emsp;
                  <br />
                  <strong>Certifications:</strong>
                  <br />
                  &emsp;&emsp;AZ-900: Microsoft Azure Fundamentals. June 17,
                  2021 &emsp;&emsp;
                  <br /> &emsp;&emsp;PL-900: Microsoft Power Platform
                  Fundamentals. August, 2022
                </p>
              </div>
            </div>
            <a href='/CerialeResume.pdf' download>
              <button className='resume-btn'>Download to PDF</button>
            </a>
          </div>
        </div>
      </div> */}
      <script></script>
    </div>
  );
}

export default Resume;
