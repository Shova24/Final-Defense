import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ time, name, date, open, handleClose }) => {
  console.log("date : ", name, time);
  const handleSubmit = (e) => {
    e.preventDefault();

    //collect data send to

    alert("submitting");
    handleClose();
  };
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          {name}
        </Typography>

        <TextField
          disabled
          id="filled-hidden-label-small"
          defaultValue={time}
          variant="filled"
          size="small"
        />

        <TextField
          hiddenLabel
          defaultValue="your Name"
          variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          defaultValue="your Email"
          variant="filled"
          size="small"
        />
        <TextField
          disabled
          defaultValue={date.toDateString()}
          variant="filled"
          size="small"
        />
        <br />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default BookingModal;
