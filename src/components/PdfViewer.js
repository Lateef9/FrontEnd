import React from 'react';

const MyPdfViewer = ({pdflink}) => {
  return (
    <div>
      <iframe
        title="PDF Viewer"
        width="805"
        height="420"
        src={pdflink}
      ></iframe>
    </div>
  );
};

export default MyPdfViewer;
