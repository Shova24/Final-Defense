import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Updates from "../Updates/Updates";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const BabySitterList = () => {
  return (
    <>
      <div className="Dashboard-App">
        <div className="AppGlass">
          <Sidebar />
          <div style={{ margin: "19%" }}>
            {/* Start Here */}
            <div style={{marginBottom:'3rem'}}>
              <h1> Add BabySitter </h1>
              <TextField
                id="standard-basic"
                label="Email Address "
                variant="standard"
              />
              <Button variant="contained" sx={{backgroundColor: "orange", marginLeft: "2rem"}}>
                Add
              </Button>
            </div>
            <div>
              <h1>BabySitter List</h1>
              <hr />
              <Updates />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BabySitterList;
