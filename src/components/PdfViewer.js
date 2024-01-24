import React from 'react';

const MyPdfViewer = ({pdflink}) => {
  return (
    <div>
      <iframe
        title="PDF Viewer"
        width="880"
        height="440"
        src={pdflink}
      ></iframe>
    </div>
  );
};

export default MyPdfViewer;
