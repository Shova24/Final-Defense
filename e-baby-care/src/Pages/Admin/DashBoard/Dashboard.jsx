import { Container } from '@material-ui/core';
import React from 'react';
import RightSide from '../RightSide/RightSide';
import Sidebar from '../Sidebar/Sidebar';
import Updates from '../Updates/Updates';
import './DashBoard.css'
const Dashboard = () => {
    return (
        <div className="Dashboard-App">
            <div className='AppGlass'>
                <Sidebar/>

                <div style={{paddingRight:'5rem',paddingTop:'5rem', width:'97%', height:'90%'}}>
                    <div>
                        <h1>Admin Dashboard</h1>
                        <hr />
                    </div>
                
                    <div style={{ display: 'flex', flexDirection:'raw !important', marginRight:'1rem'}}>
                        <div style={{ marginRight:'1rem'}}>
                        <Updates/>
                        </div>
                        <div>
                        <Updates/>
                        </div>
                    </div>
                    <div  style={{height:'1rem', widrh:'98%', paddingRight:'3rem'}}>
                        <RightSide/>
                    </div>
                </div>

            </div>  
        </div>
    );
};

export default Dashboard;