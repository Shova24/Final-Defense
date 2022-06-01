import React, { useEffect, useRef, useState } from 'react';
import './Review.css'
const Review = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [ review, setReview] = useState({});
    const handlaleOnBlur = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);

        console.log(newReview);

    }

    // useEffect(() => {
    // //   const url = `http://localhost:5000/appointments?email=${user.email}`;
    //   const url = `https://jsonplaceholder.typicode.com/posts`;
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setReview(data));
    // }, []);
    // console.log(typeof review);


    const postReview = (e) => {
        //collect data
        const reviews = {
            ...review,
        }
        console.log(reviews);
        //send to server
        fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            setDone(true)
        }
        console.log("from modal : ", data);
      });

        e.preventDefault();
    }
    return (
        <>
        <form ref={form} onSubmit={postReview}>
          <textarea name="message" className="user" onBlur={handlaleOnBlur} placeholder="Message"/>
          <br />
          <input type="submit" value="Send" className="button"/>
          <br />
          <span>{done && "Thanks for your kind review.."}</span>
        </form>
        </>
    );
};

export default Review;