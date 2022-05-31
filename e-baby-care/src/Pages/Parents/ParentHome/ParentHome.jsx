import React from 'react';
import Appointment from '../../Appointments/Appointment/Appointment';
import AppointmentsHeader from '../../Appointments/AppointmentHeader/AppointmentsHeader';
import AvailableAppointments from '../../Appointments/AvailableAppointments/AvailableAppointments';
import ParentSidebar from '../ParentSidebar/ParentSidebar';

import './ParentHome.css'


const ParentHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className="Dashboard-App">
        <div className='AppGlass'>
            <ParentSidebar/>
            {/* <AppointmentsHeader date={date} setDate={setDate} /> */}
            <Appointment/>
            
            
        </div>
    </div>
    );
};

export default ParentHome;