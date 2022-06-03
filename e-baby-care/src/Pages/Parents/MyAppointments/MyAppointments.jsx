import React from 'react';
import ParentSidebar from '../ParentSidebar/ParentSidebar';

const MyAppointments = () => {
    return (
        <>
        <div className="Dashboard-App">
            <div className='AppGlass'>
                <ParentSidebar/>
                {/* <MainDash/> */}
                <div style={{ padding: "5rem", marginTop: "12%"}}>
                
                </div>
            </div>
        </div>
      </>
    );
};

export default MyAppointments;