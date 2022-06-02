import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container } from "@mui/system";

// import Booking from "../Booking/Booking";


const Demo = () => {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([]);

    // console.log(user.email);

    useEffect(()=>{
    fetch('http://localhost:5000/appointments')
    .then(res => res.json())
    .then(data=>{
        setAppointments(data);
    })},[])

console.log(appointments);
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

    return (
        <>
  
        {
            appointments.map(ap=>(<li>some</li>))
        }
  
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

export default Demo;