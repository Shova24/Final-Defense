import React from "react";

import Sidebar from "../Sidebar/Sidebar";

//for update list
import Updates from "../Updates/Updates";

const ParentList = () => {
  return (
    <>
      <div className="Dashboard-App">
        <div className="AppGlass">
          <Sidebar />
          <div style={{ margin: "19%" }}>
            {/* Start Here */}
            <h1>Parent List</h1>
            <hr />
            <Updates />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentList;
