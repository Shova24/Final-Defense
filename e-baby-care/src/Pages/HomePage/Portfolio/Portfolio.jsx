import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; 


// importing images   
import Sidebar from '../../img/sidebar.png';
import Eccommerce from "../../img/ecommerce.png";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <span>Recent Project</span>
            <span>Portfolio</span>
            <Swiper
            spaceBetween={30}
            slidesPerView = {3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Eccommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Eccommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Eccommerce} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;