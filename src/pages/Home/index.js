import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="Home">
      <h4>Welcome to my page!</h4>
      <div class="birdroot">
        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>

        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>
      </div>
    </div>
  );
}
