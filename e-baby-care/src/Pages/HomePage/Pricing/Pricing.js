import React from "react";
import "./Pricing.css";

import Taka from "../../../img/HomePage/taka (2).png";

const Pricing = () => {
  return (
    <>
      <div className="pricing">
        {/* left side */}
        <div className="awesome">
          {/* dark mode */}
          <span>Our Affordable </span>
          <span>Pricing</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </span>
        </div>
        {/* right */}
        <div>
          {/* 3rd */}
          <div
            className="price-card"
            style={{ borderColor: "orrange", marginTop: "2rem" }}
          >
            <span style={{ color: "rgba(252, 166, 31, 0.45)" }}>
              Fixed Pricing
            </span>
            <img src={Taka} alt="" />
            <span>2 Hour : ----</span>
            <span>5 Hour : ----</span>
            <span>8 Hour : ----</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
