import React from "react";
import "./style.css";
// import { useState, useEffect } from "react";
// import projects from "../../projects.json";

export default function ProjectCard(props) {
  // const [projectData, setProjectData] = useState([]);
  // useEffect(() => {
  //   setProjectData(projects.data);
  //   console.log(projectData);
  // });
  const { name, image, description, deployed, github, preview } = props.project;
  console.log(props);
  return (
    <>
      {/* {props.project.slice(0).map((i) => (
        <div key={i}> */}
      <div className="ProjectCard">
        <div className="flip-card m-2">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                id="portfolio-image"
                src={image}
                className="img-fluid thumbnail"
                alt={name}
              />
            </div>
            <div className="flip-card-back p-2">
              <h6>Preview:</h6>
              <img
                id="portfolio-image"
                src={preview}
                className="img-fluid thumbnail"
                alt={name}
              />
              <br />
              <h6>Description:</h6>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="text">
          <a href={deployed} target="_blank">
            Deployed Link
          </a>{" "}
          |{" "}
          <a href={github} target="_blank">
            GitHub
          </a>
        </div>
      </div>
      {/* </div> */}
      {/* ))} */}
    </>
  );
}
