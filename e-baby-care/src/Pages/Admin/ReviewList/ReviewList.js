import React, { useEffect, useRef, useState } from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Sidebar from "../Sidebar/Sidebar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

const ReviewList = () => {
  const [review, setReview] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const items = [];
  for (const property in review) {
    const element = review[property].text;
    items.push(element);
  }

  return (
    <>
      <div className="Dashboard-App">
        <div className="AppGlass">
          <Sidebar />
          <div className="r-wrapper">
            <div style={{ paddingLeft: "2rem", marginTop: "0rem" }}>
              <div className="testimonial ">
                <Swiper
                  // install Swiper modules
                  modules={[Pagination]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {items.map((item) => {
                    return (
                      <SwiperSlide>
                        <div>
                          <p>{item}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>

          {/* <MainDash/> */}
        </div>
      </div>
    </>
  );
};

export default ReviewList;
