import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../../img/HomePage/profile1.jpg";


const Testimonial = () => {

  const [ review, setReview] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const items = []
  for (const property in review) {
    const element = review[property].text;
    items.push(element);
  }

console.log(items);
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Some </span>
        <span>Exceptional </span>
        <span>Reviews From Parents...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {items.map((item) => {
          return (
            <SwiperSlide >
              <div className="testimonial">
                <img src={profilePic1} alt="" />
                <p>{item}</p>
              </div>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </div>
  );
};

export default Testimonial;
