import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Sidebar from "../Sidebar/Sidebar";

import "./MainDash.css";
const MainDash = () => {
  return (
  <>
    <div className="Dashboard-App">
        <div className='AppGlass'>
            <Sidebar/>
            {/* <MainDash/> */}
            <div style={{ padding: "5rem", marginTop: "12%"}}>
              <CustomerReview/>
            
            </div>
        </div>
    </div>
  </>
  );
};

export default MainDash;
