import React from "react";
import "./style.css";
// import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <div className="Resume">
      <div className="container my-5">
        <div className="row">
          <div id="info-box" className="col-md-8 mb-5 py-5">
            <div style={{ width: "100%", height: "100vp" }}>
              {/* <Document file="/CerialeResume10.28.pdf" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <iframe
                id="resume"
                src="./images/CerialeResume10.28.pdf"
                style={{ width: "100%", height: "100vp" }}
                className="img-fluid thumbnail"
                alt="Patrick's resume"
              ></iframe> */
}
