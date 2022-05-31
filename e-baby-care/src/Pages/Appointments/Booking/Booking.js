import React from "react";

import { Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ date, booking, space, setBookingSuccess }) => {
  const { name, time } = booking;
  // console.log(time);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Grid item xs={6} sm={4} md={3}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h3" gutterBottom component="div">
            {name}
            shova
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {space}
          </Typography>
          <Button
            color="inherit"
            variant="contained"
            sx={{ backgroundColor: "teal" }}
            onClick={handleOpen}
          >
            Appointment
          </Button>
        </Paper>
      </Grid> */}
      <Button
        color="inherit"
        variant="contained"
        sx={{ backgroundColor: "orange" }}
        onClick={handleOpen}
      ></Button>

      <BookingModal
        name={name}
        time={time}
        open={open}
        date={date}
        handleClose={handleClose}
        setBookingSuccess={setBookingSuccess}
      />
    </>
  );
};

export default Booking;
