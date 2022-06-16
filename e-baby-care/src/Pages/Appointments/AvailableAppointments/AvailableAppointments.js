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
    name: "booking",
    time: "8.00 ~ 9.00",
    space: 20,
  },
];

const AvailableAppointments = ({ date }) => {
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
  const { user } = useAuth();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, []);
  const selectedDay = date.toDateString();
  // console.log(selectedDay);

  return (
    <>
      <Container>
        <h3>Available : {date.toDateString()}</h3>

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
            selectedDay={selectedDay}
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
                  <TableCell>Service Name</TableCell>
                  <TableCell>Parent Name</TableCell>

                  <TableCell align="left">Parent email</TableCell>
                  <TableCell align="left">Contact email</TableCell>
                  <TableCell align="left">Contact Phone</TableCell>
                  <TableCell align="left">Booking Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>

              {/* body starts here  */}
              <TableBody style={{ color: "white" }}>
                {appointments.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.serviceName}
                    </TableCell>
                    <TableCell align="left">{row.parentname}</TableCell>
                    <TableCell align="left">{row.parentemail}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.statusdate}</TableCell>

                    <TableCell align="left">
                      <span className="status" style={makeStyle(row.status)}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell align="left" className="Details"></TableCell>
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
