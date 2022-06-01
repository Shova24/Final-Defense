import React from "react";
import Review from "../../Parents/Review/Review";
import AppointmentsHeader from "../AppointmentHeader/AppointmentsHeader";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <AppointmentsHeader date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
    </div>
  );
};

export default Appointment;
