import React from "react";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";

const Main = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const resData = await fetch("http://localhost:3001/RELIANCE/earnings");
    const result = await resData.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data && <MainContent data={data} />}</div>;
};

export default Main;
