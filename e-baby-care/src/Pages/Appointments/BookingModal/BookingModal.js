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

const BookingModal = ({
  time,
  name,
  date,
  selectedDay,
  open,
  handleClose,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  // console.log("Modal", user);
  console.log(selectedDay, "bk");

  const initialInfo = {
    parentname: user.displayName,
    parentemail: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleSubmit = (e) => {
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date,
      statusdate: date.toLocaleString(),
    };
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleClose();
        }
      });

    e.preventDefault();
  };
  const email = user.email;

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo, email };
    newInfo[field] = value;
    console.log("new info", newInfo);
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
          Booke a BabySitter
        </Typography>
        <form>
          <TextField
            disabled
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            name="userEmail"
            size="small"
          />

          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="Your name"
            name="parentname"
            defaultValue={user.displayName}
            size="small"
            onBlur={handleOnBlur}
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            id="outlined-size-small"
            placeholder="Your email"
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
