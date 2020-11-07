import React from "react";

export default function ProjectCard() {
  return (
    <div className="ProjectCard">
      <div className="flip-card m-2">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              id="portfolio-image"
              src="images/WhaleHunterLogo.png"
              className="img-fluid thumbnail"
              alt="Screen shot of Whale Hunter"
            />
          </div>
          <div className="flip-card-back p-2">
            <p>description</p>
          </div>
        </div>
      </div>
      <div className="text">
        <a href="https://whalehunterbeer.herokuapp.com/" target="_blank">
          Whale Hunter Beer Discovery App
        </a>{" "}
        /{" "}
        <a href="https://github.com/PatCeriale/Whale-Hunter" target="_blank">
          GitHub
        </a>
      </div>{" "}
    </div>
  );
}
