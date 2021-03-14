import React from "react";
import { Link, useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  return (
    <div className="result-page card">
      <h1>{location.data[0] + " / " + location.data[1]}</h1>
      <Link to="/">
        <button className="btn result-btn">Start All Over?</button>
      </Link>
    </div>
  );
};

export default ResultPage;
