import React from "react";
import MyPdfViewer from "./PdfViewer";
import { useState, useEffect } from "react";

const MainContent = ({ data }) => {
  const [recorddata, setrecordadata] = useState();

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      const latestYear = Math.max(...Object.keys(data));
      const latestTranscripts = data[latestYear];

      if (latestTranscripts && latestTranscripts.length > 0) {
        const latestTranscript = latestTranscripts[0];
        setrecordadata(latestTranscript);
      }
    }
  }, [data]);

  const handleOnclick = (val) => {
    setrecordadata(val);
  };
  return (
    <>
      <div className="border-t border-gray-300 mb-4"></div>

      <div className="flex flex-row ">
        <div className="flex flex-row-2/6">
          <div className="flex flex-col px-4">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>

          <div>
            <h4 className="mx-[20px] text-base font-bold">Earnings Calls </h4>

            {Object.entries(data)
              .sort((a, b) => b[0] - a[0])
              .map(([year, value]) => {
                return (
                  <div key={year} className="mx-[20px] w-[300px] mt-7">
                    <h3 className="text-gray-800 font-normal text-10">
                      {" "}
                      Year - {year}
                    </h3>
                    <div className="border-t border-gray-300 mt-1 mb-4"></div>
                    {value &&
                      value.map((val, index) => {
                        return (
                          <div key={index}
                            className={`flex p-3 border cursor-pointer rounded-md font-inter text-10 ${
                              recorddata === val ? "border-gray-400" : ""
                            }`}
                            onClick={() => handleOnclick(val)}
                          >
                            <div key={index}>
                              {val.companyname} {val.quarter} {val.year}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col w-4/6  ">
          <h2 className="font-bold text-base"> Transcripts </h2>
          {recorddata && (
            <p className="text-xs text-font mb-1">
              {recorddata.companyname}, {recorddata.quarter} {recorddata.year}{" "}
              Earning Calls
            </p>
          )}
          <div>
            {recorddata && (
              <MyPdfViewer pdflink={recorddata.content_pdf_link} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
