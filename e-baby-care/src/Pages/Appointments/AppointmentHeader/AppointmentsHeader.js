import React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import Cover from "../../../img/HomePage/Cover2.png";
import { Button, Container, Link } from "@mui/material";
// import Calender from "../Sheared/Calender/Calender";
import Calender from "../../Sheared/Calender/Calender";
import { UilEstate, UilSignOutAlt } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

const AppointmentsHeader = ({ date, setDate }) => {
  //   const [date, setDate] = React.useState(new Date());
  //   console.log(date);

  return (
    <Container>
      <div
        className="menuItem"
        style={{ paddingTop: "2rem", marginBottom: "2rem" }}
      >
        <UilEstate />
        <NavLink to="/">
          <Button
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            Homepage
          </Button>
        </NavLink>
      </div>

      <Grid container justify="center" spacing={2}>
        <Grid xs={12} md={6}>
          <Container
            sx={{
              textAlign: "center",
              alignItems: "center",
              marginTop: "20%",
            }}
          >
            <Calender date={date} setDate={setDate} />
          </Container>
        </Grid>
        <Grid xs={12} md={6}>
          <img style={{ width: "100%" }} src={Cover} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentsHeader;
