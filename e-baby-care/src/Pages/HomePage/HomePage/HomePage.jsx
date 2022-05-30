import React from 'react';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Offer from '../Offer/Offer';

const HomePage = () => {
    return (
     <>
     <Navbar></Navbar>
        <Intro/>
        <Offer/>
     </>
    );
};

export default HomePage;