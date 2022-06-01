import React from "react";

import Calender from "../../Sheared/Calender/Calender";

const AppointmentsHeader = ({ date, setDate }) => {
  return (
    <>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "10",
        }}
      >
        <div>
          <h1>Book a BabySitter</h1>
          <hr />
          <Calender date={date} setDate={setDate} />
        </div>
      </div>
    </>
  );
};

export default AppointmentsHeader;
