import React from 'react';
import "./Intro.css";

import LinkedIn from '../../../img/HomePage/linkedin.png';
import Instagram from '../../../img/HomePage/instagram.png';


import Vector1 from '../../../img/HomePage/Vector1.png';
import Vector2 from '../../../img/HomePage/Vector2.png';
import Cover from '../../../img/HomePage/Cover2.png';


import { Grid, Paper, Typography,Container, Button, Link  } from "@mui/material";
import { NavLink } from 'react-router-dom';

 
const Intro = () => {

    return (
        <>
          <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
            <span>Welcome to </span>
            <span>eBabyCare</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia saepe laudantium, dolore nesciunt quidem?</span>
        </div>
        <NavLink to='/parenthome'>
        <button className="button i-button">Hire BabySitter</button>
        </NavLink>

        {/* social icons */}
        <div className="i-icons">
  
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Cover} alt="" />


        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
        </>
    );
};

export default Intro;