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
            <div style={{ width: "100%", height: "100vp" }}>
              {/* <PDFViewer> */}
              <Document
                file="../../public/images/CerialeResume11:20.PDF"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              {/* </PDFViewer> */}
              {/* <iframe src="./images/CerialeResume10.28.pdf"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
