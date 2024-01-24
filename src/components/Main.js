import React from "react";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";

const Main = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const resData = await fetch("https://backend-six-inky-74.vercel.app/RELIANCE/earnings");
    const result = await resData.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data && <MainContent data={data} />}</div>;
};

export default Main;
