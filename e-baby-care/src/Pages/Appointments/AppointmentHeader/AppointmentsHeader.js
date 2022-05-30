import React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import Cover from "../../../img/HomePage/Cover2.png";
import { Container } from "@mui/material";
// import Calender from "../Sheared/Calender/Calender";
import Calender from "../../Sheared/Calender/Calender";

const AppointmentsHeader = ({ date, setDate }) => {
  //   const [date, setDate] = React.useState(new Date());
  //   console.log(date);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Calender date={date} setDate={setDate} />
          <h2>appointment : </h2>
        </Grid>
        <Grid xs={12} md={6}>
          <img style={{ width: "100%" }} src={Cover} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentsHeader;
