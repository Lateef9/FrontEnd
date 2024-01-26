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
    console.log(val)
  };
  return (
    <>
      <div className="border-t border-gray-300 mb-4"></div>

      <div className="flex flex-row ">
        <div className="flex flex-row-2/6 h-full">
          <div className="flex flex-col pl-6 pr-4">

<svg  className="mt-2 mb-3  cursor-pointer" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M3.04288 0C1.36192 0 0 1.36221 0 3.04353V16L2.51115 13.6736H13.4237C14.8473 13.6736 16 12.5207 16 11.0967V0H3.04288ZM7.8765 10.2458H2.88851V8.13554H7.8765V10.2458ZM13.0738 6.29294H2.88851V4.18271H13.0738V6.29294Z" fill="#1C1818"/>
</svg>

<svg className="my-4  cursor-pointer" width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 108">
<path id="Vector" d="M0 7.93023V8.6606C0 10.4651 1.23158 11.9473 2.82316 12.0762V15.2769H5.96843V12.0977H6.29054V4.49316H3.03159C1.36421 4.49316 0 6.03984 0 7.93023Z" fill="#B4B4B4"/>
<path id="Vector_2" d="M15.9399 0.121733C15.7947 -0.0135259 15.595 -0.036069 15.4316 0.0541036L7.18945 4.78817V11.3933L15.4316 16.1274C15.7039 16.2626 16.0307 16.1048 16.1396 15.7667C16.1759 15.6765 16.1759 15.5863 16.1759 15.4962V0.685312C16.1759 0.45988 16.0852 0.256992 15.9399 0.121733Z" fill="#B4B4B4"/>
</g>
</svg>

<svg className="my-4  cursor-pointer" width="14" height="14" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 109">
<path id="Vector" d="M5.19922 0.561655C5.19922 0.252745 5.45918 0 5.77692 0H10.3985C10.7163 0 10.9762 0.252745 10.9762 0.561655V2.80828C10.9762 3.11719 10.7163 3.36993 10.3985 3.36993H5.77692C5.45918 3.36993 5.19922 3.11719 5.19922 2.80828V0.561655Z" fill="#B4B4B4"/>
<path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M2.88851 1.12354H4.04392V3.74647C4.04392 4.16209 4.40787 4.49347 4.8527 4.49347H11.323C11.7678 4.49347 12.1318 4.15647 12.1318 3.74647V1.12354H13.2872C14.8816 1.12354 16.1757 2.38164 16.1757 3.93181V14.2663C16.1757 15.8164 14.8816 17.0745 13.2872 17.0745H2.88851C1.29405 17.0745 0 15.8164 0 14.2663V3.93181C0 2.38164 1.29405 1.12354 2.88851 1.12354ZM8.08784 7.8634C7.7701 7.8634 7.51014 8.11615 7.51014 8.42506C7.51014 8.73397 7.7701 8.98671 8.08784 8.98671H12.7095C13.0272 8.98671 13.2872 8.73397 13.2872 8.42506C13.2872 8.11615 13.0272 7.8634 12.7095 7.8634H8.08784ZM7.51014 12.9183C7.51014 12.6094 7.7701 12.3566 8.08784 12.3566H10.3986C10.7164 12.3566 10.9764 12.6094 10.9764 12.9183C10.9764 13.2272 10.7164 13.48 10.3986 13.48H8.08784C7.7701 13.48 7.51014 13.2272 7.51014 12.9183ZM2.88851 8.42506C2.88851 7.49271 3.66264 6.74009 4.62162 6.74009C5.58061 6.74009 6.35473 7.49271 6.35473 8.42506C6.35473 9.3574 5.58061 10.11 4.62162 10.11C3.66264 10.11 2.88851 9.3574 2.88851 8.42506ZM2.88851 12.9183C2.88851 11.986 3.66264 11.2333 4.62162 11.2333C5.58061 11.2333 6.35473 11.986 6.35473 12.9183C6.35473 13.8506 5.58061 14.6033 4.62162 14.6033C3.66264 14.6033 2.88851 13.8506 2.88851 12.9183Z" fill="#B4B4B4"/>
</g>
</svg>

<svg className="my-4 cursor-pointer" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Layer_1" clip-path="url(#clip0_978_7942)">
<path id="Vector" d="M16 10.96V1.04C16 0.47 15.54 0 14.96 0H1.04C0.46 0 0 0.46 0 1.04V10.97C0 11.54 0.46 12.01 1.04 12.01H7V14.01H4.64C4.29 14.01 4 14.3 4 14.65V15.37C4 15.72 4.29 16.01 4.64 16.01H11.36C11.71 16.01 12 15.72 12 15.37V14.65C12 14.3 11.71 14.01 11.36 14.01H9V12.01H14.96C15.53 12.01 16 11.55 16 10.97V10.96ZM5.4 9.5H3.4V3.5H5.4V9.5ZM10.6 6.4H12.6V9.5H10.6V6.4ZM7 9.5V5H9V9.5H7Z" fill="#B4B4B4"/>
</g>
<defs>
<clipPath id="clip0_978_7942">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>



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
                    <div className="  border-t border-gray-300 mt-1 mb-4"></div>
                    {value &&
                      value.map((val, index) => {
                        return (
                          <div key={index}
                            className={`flex p-3 justify-between border cursor-pointer rounded-md font-inter text-10 ${
                              recorddata === val ? "border-gray-400" : ""
                            }`}
                            onClick={() => handleOnclick(val)}
                          >
                            <div key={index} className="flex w-full justify-between">
  
                              
                              <span className=""> {val.companyname} {val.quarter} {val.year}</span>  
                             <span className=""> {val.date}   </span>           
                              
                            </div>
                          </div>
                        );
                      })}
                  </div>
                );
              })}
          </div>
        </div>
        
        <div className="bg-stone-200 flex flex-col w-4/6">
        <div className="pl-3 m-3 bg-white">
          <h2 className="font-bold text-base"> Transcripts </h2>
          {recorddata && (
            <p className="text-xs text-font mb-1">
              {recorddata.companyname}, {recorddata.quarter} {recorddata.year}{" "}
              Earning Calls
            </p>
          )}
          <div >
            {recorddata && (
  
              <MyPdfViewer pdflink={recorddata.content_pdf_link} />
            )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
