import React from "react";
import "./style.css";

export default function ProjectCard(props) {
  const { name, image, description, deployed, github, preview } = props.project;
  return (
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
            <p>Preview:</p>
            <img
              id="portfolio-image"
              src={preview}
              className="img-fluid thumbnail"
              alt={name}
            />
            <br />
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="text">
        <a href={deployed} target="_blank">
          {name}
        </a>{" "}
        /{" "}
        <a href={github} target="_blank">
          GitHub
        </a>
      </div>{" "}
    </div>
  );
}
