import React from "react";

import "./cardHelper.css";

const Card = ({ children }) => {
  return (
    <>
      <div className="cards-helper">{children}</div>
    </>
  );
};

export default Card;
