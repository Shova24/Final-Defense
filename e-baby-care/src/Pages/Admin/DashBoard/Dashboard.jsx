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
                <MainDash/>
                <RightSide/>
            </div>
        </div>
    );
};

export default Dashboard;