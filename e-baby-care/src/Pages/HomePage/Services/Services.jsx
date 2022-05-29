import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import shova from './shova.pdf';


const Services = () => {
    return (
        <div className="services">
            {/* left side  */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    <br />
                    Lorem ipsum dolor sit amet.
                </span>

                <a href={shova} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" ></div>
                <div className="blur s-blur2" ></div>
            </div>
            {/* right side  */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card 
                    emoji ={HeartEmoji}
                    heading ={'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                    />
                </div>
                {/* second card  */}
                <div style={{top:"12rem", left: '-4rem'}}>
                    <Card 
                    emoji ={Glasses}
                    heading ={'Developer'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                    />
                </div>
                {/* 3rd Card  */}
                <div style={{ top:'19rem', left: '12rem'}}>
                    <Card 
                    emoji ={Humble}
                    heading ={'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Services;