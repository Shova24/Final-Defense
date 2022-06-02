import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const AppointmentsList = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  // console.log(user.email);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => {
          console.log('data',data);
        setAppointments(data);
      });
  }, []);
  console.log(user.email);
  console.log(appointments);
  return (
    <>
      <div className="Dashboard-App">
        <div className="AppGlass">
          <Sidebar />
          {/* <MainDash/> */}
          <div style={{ padding: "5rem" }}>
            {appointments.map((ap) => (
              <li>some</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentsList;
