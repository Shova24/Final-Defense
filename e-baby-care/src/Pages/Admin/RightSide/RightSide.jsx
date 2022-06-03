import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./RightSide.css";

import Demo from "../Demo/Demo";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;

