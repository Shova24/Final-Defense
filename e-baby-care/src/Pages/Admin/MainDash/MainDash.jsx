import React from "react";

import Demo from "../Demo/Demo";
import Sidebar from "../Sidebar/Sidebar";

import "./MainDash.css";
const MainDash = () => {
  return (
<>
  
  <div className="Dashboard-App">
      <div className='AppGlass'>
          <Sidebar/>
          {/* <MainDash/> */}
          <div style={{padding:'5rem'}}>
          
          </div>
      </div>
  </div></>
  );
};

export default MainDash;
