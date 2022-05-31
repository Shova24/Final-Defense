import React from 'react';

import "./Navbar.css";
import {Link} from 'react-scroll';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Button from "@mui/material/Button";

const Navbar = () => {
    const {user, logout} = useAuth();
    return (
       <div className="n-wrapper">
           <div className="n-left">
               <div className="n-name">
               eBabyCare
    
                </div>
                {/* <Toggle/> */}
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} className="hov" to={Navbar} smooth={true}activeClass='activeClass'>
                        <li>Home</li>
                        </Link>

                        <Link spy={true} className="hov" to='services' smooth={true}activeClass='activeClass'>
                        <li>Services</li>
                        </Link>

                        <Link spy={true} className="hov" to='testimonial' smooth={true}activeClass='activeClass'>
                        <li>Reviews</li>
                        </Link>


                        {user?.email ? (
                            <Link spy={true} onClick={logout} className="hov" smooth={true}activeClass='activeClass'>
                                <li>logout</li></Link>) : (
                        <NavLink to="/login" className="hov">
                            <li>login</li>
                        </NavLink>)}



                        <Link spy={true} className="hov" to='contact' smooth={true}activeClass='activeClass'>
                        <li>contact</li>
                        </Link>


                    </ul>
                </div>
                <Link  spy={true} smooth={true}activeClass='activeClass' to='contact'><button className="button n-button">Contact</button></Link>
                
            </div>
       </div>


    );
}

export default Navbar;