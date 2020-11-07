import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <footer class="card-footer text-muted">
        {" "}
        <a
          href="https://www.linkedin.com/in/patrick-ceriale-2537101b1/"
          target="blank"
        >
          LinkedIn
        </a>{" "}
        <a href="https://github.com/PatCeriale" target="blank">
          GitHub
        </a>{" "}
        &#169; Copyright<Link to="/resume"> Resume </Link>
      </footer>
    </div>
  );
}
