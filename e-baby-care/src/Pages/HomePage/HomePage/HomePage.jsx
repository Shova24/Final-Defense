import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const HomePage = () => {
    return (
     <>
     <Navbar></Navbar>
        <Intro/>
        {/* <Offer/> */}
        <Services/>
        <Contact/>
        <Footer/>
     </>
    );
};

export default HomePage;