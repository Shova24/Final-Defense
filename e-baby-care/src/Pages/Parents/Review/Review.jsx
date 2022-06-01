import React, { useEffect, useRef, useState } from "react";
import "./Review.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

const Review = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [review, setReview] = useState({});
  const [text, setText] = useState("");

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

  const handleSubmit = (e) => {
    const newText = { text: text };
    e.preventDefault();
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newText),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setDone(true);
          
        }
        console.log("from post parent : ", data);
      });
    console.log("text ", text);
  };
  let len = review.length;

  return (
    <>
      <div className="Dashboard-App">

          <div className="r-wrapper">
            <h1>Leave us A review - </h1>
            <hr />
            <div className="c-right">
              <form ref={form}>
                <textarea
                  name="message"
                  className="user"
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Message"
                />
                <input
                  type="submit"
                  value="Send"
                  className="button"
                  onClick={handleSubmit}
                />
                <span>{done && "Thanks for your kind review.."}</span>
              </form>
            </div>

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
    </>
  );
};

export default Review;
