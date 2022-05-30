import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Booking from "../Booking/Booking";
const bookings = [
  {
    id: 1,
    name: "name of booking",
    time: "8.00 = 9.00",
    space: 20,
  },
  {
    id: 3,
    name: "name of booking",
    time: "8.00 = 9.00",
    space: 20,
  },
  {
    id: 2,
    name: "name of booking",
    time: "8.00 = 9.00",
    space: 20,
  },
  {
    id: 4,
    name: "name of booking",
    time: "8.00 = 9.00",
    space: 20,
  },
];

const AvailableAppointments = ({ date }) => {
  // console.log("av: ", date);
  return (
    <Container>
      <h3>Available : {date.toDateString()}</h3>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
