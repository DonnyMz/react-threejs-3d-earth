import React from "react";
import "./spinner.css";
import LoadingSpinner from "./spinner.svg";

const Spinner = () => {
  return (
    <div className="main-top-spinner">
      <h1>
        <span className="text-pulsing">Warming up ...</span>
      </h1>
      <div className="App-spinner">
        <img
          src={LoadingSpinner}
          className="App-spinner "
          alt="spinner loading"
        />
      </div>
    </div>
  );
};

export default Spinner;
