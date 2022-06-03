import React, {useState} from 'react';
import './ParentSidebar.css'

import Logo from "../../../img/Admin/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";

import {ParentSidebarData} from "../../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import useAuth from '../../../Hooks/useAuth';

const ParentSidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true);

    const {logOut} = useAuth();
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
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
                {/* <span>{item.heading}</span> */}
                <Link href={item.url} sx={{textDecoration: 'none', color:'black'}}>{item.heading}</Link>
              </div>
            );
          })}
         

  {/* signoutIcon */}
        <div>
          <Link href='/' className="menuItem"  sx={{textDecoration: 'none', color:'black', marginLeft: '20%'}}
          onClick={logOut}>
          <UilSignOutAlt />
          </Link>
         
        </div>
        </div>
      </motion.div>
      </>
    );
};

export default ParentSidebar;