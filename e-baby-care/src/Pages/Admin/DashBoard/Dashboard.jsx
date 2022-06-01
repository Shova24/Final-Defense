import { Container } from '@material-ui/core';
import React from 'react';
import MainDash from '../MainDash/MainDash';
import RightSide from '../RightSide/RightSide';
import Sidebar from '../Sidebar/Sidebar';
import './DashBoard.css'
const Dashboard = () => {
    return (
        <div className="Dashboard-App">
            <div className='AppGlass'>
                <Sidebar/>
                {/* <MainDash/> */}
                <div style={{padding:'5rem'}}>
                <RightSide/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;