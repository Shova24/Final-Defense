import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

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
  const { user } = useAuth();

  const initialInfo = {
    parentname: user.displayName,
    parentemail: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleSubmit = (e) => {
    console.log("clicked");
    //collect data send to
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date,
      statusdate: date.toLocaleString(),
    };
    console.log(appointment);
    handleClose();

    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
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
        <form>
          <TextField
            disabled
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={time}
            size="small"
          />

          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="you name"
            name="parentname"
            defaultValue={user.displayName}
            size="small"
            onBlur={handleOnBlur}
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="you email"
            name="parentemail"
            defaultValue={user.email}
            size="small"
            onBlur={handleOnBlur}
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="Your Phone"
            name="phone"
            size="small"
            onBlur={handleOnBlur}
          />
          <TextField
            disabled
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
            onBlur={handleOnBlur}
          />
          <br />
          <Button
            variant="contained"
            sx={{ backgroundColor: "orange", clor: "white", marginTop: "1rem" }}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
