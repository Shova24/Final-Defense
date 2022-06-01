import React, {useState} from 'react';
import './ParentSidebar.css'

import Logo from "../../../img/Admin/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../../../Data/Data";
import {ParentSidebarData} from "../../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const ParentSidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true)
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
    // console.log(window.innerWidth)
    // console.log(ParentSidebarData);
    return (
        <>
        <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
          <UilBars />
        </div>
      <motion.div className='sidebar'
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            e<span>Baby</span>Care
          </span>
        </div>
  
        <div className="menu">
            
          {ParentSidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
              // <NavLink to='/' style={(true)=>{
              //   (selected === index ){
              //     // menuItem
              //   display: 'flex' ,
              //   alignItems: 'center' ,
              //   gap: '1rem' ,
              //   height: '2.5rem' ,
              //   marginLeft: '2rem' ,
              //   position: 'relative' ,
              //   transition: 'all 300ms ease' ,
              //   borderRadius: '0.7rem' ,
              //   fontSize: '14px' ,
              //   color:'black',
              //   textDecoration: 'none',
              //   }
                
    
              // }}>
              // <item.icon />
              // <span>{item.heading}</span>
              // </NavLink>
            );
          })}
  {/* signoutIcon */}
        <div>
          <NavLink to='/' style={{
            display: 'flex' ,
            alignItems: 'center' ,
            gap: '1rem' ,
            height: '2.5rem' ,
            marginLeft: '2rem' ,
            // position: 'relative' ,
            transition: 'all 300ms ease' ,
            borderRadius: '0.7rem' ,
            fontSize: '14px' ,
            color:'black',

            position: 'absolute',
            bottom: '2.3rem',
            width: '100%',
          }}>
          <UilSignOutAlt />
          </NavLink>
         
        </div>
        </div>
      </motion.div>
      </>
    );
};

export default ParentSidebar;