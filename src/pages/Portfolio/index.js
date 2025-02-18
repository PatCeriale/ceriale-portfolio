import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import './style.css';
import projects from '../../projects.json';

export default function Portfolio() {
  return (
    <div className='Portfolio'>
      <div className='container my-5 portfolio'>
        <div className='row'>
          <div id='info-box' className='col-md-10 mb-5 py-5 mx-auto'>
            <h1>Project Portfolio</h1>
            <hr />
            <br />
            <h4>Professional Projects</h4>
            While I unfortunately cannot include examples due to client
            confidentiality, some projects I have worked on include:
            <br />
            <br />
            <div className='job'>
              <span>
                <b>Cloud Migration Lead – Multinational Tech Company</b>
              </span>
              <ul>
                <li>
                  Led a full-stack team, driving frontend development and UX
                  decisions.
                </li>
                <li>
                  Integrated frontend and backend services, ensuring seamless
                  data flow, security and system efficiency.
                </li>
                <li>
                  Migrated automation from on-premise to hybrid cloud, improving
                  reliability and performance.
                </li>
              </ul>
            </div>
            <div className='job'>
              <span>
                <b>
                  MVP Development & UX Collaboration – Multinational Tech
                  Company
                </b>
              </span>
              <ul>
                <li>
                  Partnered with customers to define requirements and deliver
                  new MVPs every two weeks.
                </li>
                <li>
                  Bridged development and UX teams to ensure seamless design
                  implementation.
                </li>
                <li>
                  Conducted live demos, addressing client feedback in real time.
                </li>
              </ul>
            </div>
            <div className='job'>
              <span>
                <b>Government Intranet Modernization</b>
              </span>
              <ul>
                <li>
                  Upgraded a government intranet with custom React webparts for
                  better accessibility.
                </li>
                <li>
                  Integrated multiple data sources to centralize user
                  information retrieval.
                </li>
              </ul>
            </div>
            <div className='job'>
              <span>
                <b>Healthcare UX Optimization</b>
              </span>
              <ul>
                <li>
                  Designed and developed prototypes to enhance user experience
                  in healthcare applications.
                </li>
                <li>
                  Balanced technical feasibility with design intent to create
                  intuitive interfaces that satisfied stakeholders.
                </li>
              </ul>
            </div>
            <br />
            <h4>Personal Projects</h4>
            <p className='projectHelpTxt' style={{ textAlign: 'center' }}>
              *Click/hover on icons for screenshot and description
            </p>
            <div
              className='row col-md-10 mb-5 py-2 mx-auto d-flex justify-content-center'
              id='card-info-box'
            >
              {projects.map((project, index) => (
                <div key={index} className='col-xl-4 col-md-6 col-sm-12 mb-4'>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <i className='fa-brands fa-github'></i> The GitHub for this
            portfolio can be found{' '}
            <a
              href='https://github.com/PatCeriale/ceriale-portfolio'
              target='_blank'
              rel='noreferrer'
            >
              here
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
