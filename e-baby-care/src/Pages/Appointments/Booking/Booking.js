import React from "react";

import { Button } from "@mui/material";

import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ date, booking, space, setBookingSuccess }) => {
  const { name, time } = booking;
  // console.log(time);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        color="inherit"
        variant="contained"
        sx={{ backgroundColor: "orange" }}
        onClick={handleOpen}
      >
        Book a BabySitter
      </Button>

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
