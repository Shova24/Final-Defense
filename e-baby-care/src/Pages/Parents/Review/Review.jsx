import React, { useEffect, useRef, useState } from 'react';
import './Review.css';
import useAuth from './../../../Hooks/useAuth'
import Swiper, { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';


const Review = () => {
    const form = useRef();
    const {user} = useAuth();   
    // console.log('user : ',user.email);

    const [done, setDone] = useState(false)
    const [review, setReview] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
      const url = `http://localhost:5000/reviews`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setReview(data));
    }, []);
    
    // const array = review[0];
    // const msg = array.message;
    // console.log("reviews : ",review[0].text );



    const handleSubmit = (e) => {
      const newText = {text : text}
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
            setDone(true)
        }
        console.log("from modal : ", data);
      });
      console.log("text ", text);
    }
let len = review.length;


    return (
        <>
        <form ref={form} >
          <textarea name="message" className="user" onChange={e=>setText(e.target.value)} placeholder="Message"/>
          <br />
          <input type="submit" value="Send" className="button" onClick={handleSubmit}/>
          <br />
          <span>{done && "Thanks for your kind review.."}</span>
        </form>
        <div>


          length : {len}
        </div>

        {/* {
          review.map((review, index)=>{
            return (<p>ssss</p>)
          })
        } */}
          {/* {review[0].text} */}
          {/* {
            review.map((review, index)=>{
              return(<p>some</p>)
            })
          } */}
{/*         
        {review.map((review) => {
          return (
            <p >
            </p>
          );
        })}    */}

        </>
    );
};

export default Review;