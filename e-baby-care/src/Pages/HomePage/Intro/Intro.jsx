import React from 'react';
import "./Intro.css";
import Github from '../../../img/HomePage/github.png'
import LinkedIn from '../../../img/HomePage/linkedin.png';
import Instagram from '../../../img/HomePage/instagram.png';

import Vector1 from '../../../img/HomePage/Vector1.png';
import Vector2 from '../../../img/HomePage/Vector2.png';
import Cover from '../../../img/HomePage/Cover2.png';

import thumbup from '../../../img/HomePage/thumbup.png';
import Crown from '../../../img/HomePage/crown.png';
import glassesimoji from '../../../img/HomePage/glassesimoji.png';
import Floating from '../FloatingDiv/Floating';


import { Grid, Paper, Typography,Container, Button, Link  } from "@mui/material";
import { NavLink } from 'react-router-dom';

 

const Intro = () => {

    
    return (
        <>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <div className="intro">
                            <div className="i-left">
                                <div className="i-name">
                                    <span>Welcome to eBabyCare</span>
                                    <span>We Are The Best In Town</span>
                                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia saepe laudantium, dolore nesciunt quidem?</span>
                                </div>
                                {/* <Link to='login'>   <button className="button i-button">Hire babySitter</button></Link> */}
                                <NavLink to="login">
            <Button variant='contained' color="inherit">Hire babySitter</Button>
          </NavLink>
                            
                             

                                <div className="i-icons">
                                    <img src={Github} alt="" />
                                    <img src={LinkedIn} alt="" />
                                    <img src={Instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="i-right">
                            <img src={Vector1} alt="" />
                            <img src={Vector2} alt="" />
                            <img style={{}} src={Cover} alt="" />
                            <img src={glassesimoji} alt="" />
                            {/* <div className="i-floating">
                                <Floating image={Crown} txt1='Web' txt2='Developer' />
                            </div>
                            <div className="i-floating-2">
                                <Floating image={thumbup} txt1='Best' txt2='Award'/>
                            </div> */}

                            <div className="blur pink"></div>
                            <div className="blur blue"></div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Intro;