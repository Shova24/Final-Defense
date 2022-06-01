import "./AvailableAppointments.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Booking from "../Booking/Booking";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Alert } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
const bookings = [
  {
    id: 1,
    name: "bookin1",
    time: "8.00 = 9.00",
    space: 20,
  },
  {
    id: 3,
    name: "name of booking2",
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
  function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
  }

  const rows = [
    createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
    createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
    createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
    createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
  ];

  const makeStyle = (status) => {
    if (status === "Approved") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = useAuth();
  const [appointments, setAppontments] = useState();
  console.log(user.email);

  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${user.email}`;
    // const url = `https://jsonplaceholder.typicode.com/posts/1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppontments(data));
  }, []);
  return (
    <>
      <Container>
        <h3>Available : {date.toDateString()}</h3>
        <h5>App : {appointments}</h5>

        {bookingSuccess && (
          <Alert severity="success">
            Booking requeest sent.. Wait for our call.
          </Alert>
        )}
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Container>

      <Container>
        <div className="Table">
          <h3>Appointments List</h3>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>parent Name</TableCell>
                  <TableCell align="left">User Phone</TableCell>
                  <TableCell align="left">User email</TableCell>
                  <TableCell align="left">User Phone</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>

              <TableBody style={{ color: "white" }}>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.trackingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                      <span className="status" style={makeStyle(row.status)}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      Details
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </>
  );
};

export default AvailableAppointments;
