import React from 'react';
import './Footer.css';
import Wave from '../../../img/wave.png'
import Instra from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} style={{width: '100%'}} alt="" />
            <div className="f-content">
                <span>Shovaaziz2409@gmail.com</span>
                <div className="f-icons">
                    <Instra color='white' size ='3rem'/>
                    <Facebook color='white' size ='3rem'/>
                    <Twitter color='white' size ='3rem'/>

                </div>

            </div>
            
        </div>
    );
};

export default Footer;