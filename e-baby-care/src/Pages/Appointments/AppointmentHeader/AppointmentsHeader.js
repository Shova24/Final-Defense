import React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import Cover from "../../../img/HomePage/Cover2.png";
import { Button, Container, Link } from "@mui/material";
// import Calender from "../Sheared/Calender/Calender";
import Calender from "../../Sheared/Calender/Calender";
import { UilEstate, UilSignOutAlt } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import Review from "../../Parents/Review/Review";

const AppointmentsHeader = ({ date, setDate }) => {
  //   const [date, setDate] = React.useState(new Date());
  //   console.log(date);

  return (
    // <Container
    //   sx={{
    //     textAlign: "center",
    //     alignItems: "center",
    //     marginTop: "20%",
    //   }}
    // >
    //   {" "}

    // </Container>
    <>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          gap: "10",
        }}
      >
        <div>
          <h1>Book a BabySitter</h1>
          <hr />
          <Calender date={date} setDate={setDate} />
        </div>
        <div
          style={{
            width: "40%",
            marginTop: "10%",
            flex: 1,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <h1>Write a Review - </h1>
          <Review />
        </div>
      </div>
    </>
  );
};

export default AppointmentsHeader;
