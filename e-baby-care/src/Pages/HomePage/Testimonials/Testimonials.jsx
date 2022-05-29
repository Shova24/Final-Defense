import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';

import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients =[
        {img: profilePic1, 
        review : "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur cupiditate inventore maiores expedita, sed quasi unde, illo ea exercitationem odio obcaecati ad ipsum mollitia?" },
        {img: profilePic2, 
        review : "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur cupiditate inventore maiores expedita, sed quasi unde, illo ea exercitationem odio obcaecati ad ipsum mollitia?" },
        {img: profilePic3, 
        review : "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur cupiditate inventore maiores expedita, sed quasi unde, illo ea exercitationem odio obcaecati ad ipsum mollitia?" },
        {img: profilePic2, 
        review : "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur cupiditate inventore maiores expedita, sed quasi unde, illo ea exercitationem odio obcaecati ad ipsum mollitia?" }
    ]

    return ( <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>From me... </span>
                <div className="blur pink">
                </div>
                <div className="blur blue"></div>
            </div>

            {/* slide  */}
            <Swiper
             modules ={[Pagination]}
            // slidePerView= {1}
            pagination={{ clickable: true }}
            // spaceBetween={10}
            slidesPerView = {1}
            grabCursor={true}
            >

                {
                    clients.map((client, index)=>{
                        console.log(client);
                        return(
                               <SwiperSlide key={index}>
                                   <div className="testimonial">
                                        <img src={client.img} alt="" />
                                        <span>{client.review}</span>
                                   </div>
                                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
export default Testimonials;