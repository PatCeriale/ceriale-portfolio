import React from "react";
import ProjectCard from "../../components/ProjectCard";
import "./style.css";
import projects from "../../projects.json";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="container my-5 portfolio">
        <div className="row">
          <div id="info-box" className="col-sm-auto mb-5 py-5">
            <h1>Project Portfolio</h1>
            <hr />
            *Click on icons for app preview and description
            <div className="d-flex flex-lg-row flex-column flex-wrap align-items-center">
              <div className="m-2 portfolioContainer">
                <ProjectCard project={projects[0]} />
              </div>
              <div className="m-2">
                <ProjectCard project={projects[1]} />
              </div>
            </div>
            <div className="d-flex flex-lg-row flex-column flex-wrap align-items-center">
              <div className="m-2 portfolioContainer">
                <ProjectCard project={projects[2]} />
              </div>
              <div className="m-2">
                <ProjectCard project={projects[3]} />
              </div>
            </div>
            <div className="d-flex flex-lg-row flex-column flex-wrap align-items-center">
              <div className="m-2 portfolioContainer">
                <ProjectCard project={projects[4]} />
              </div>
              <div className="m-2">
                <ProjectCard project={projects[5]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
