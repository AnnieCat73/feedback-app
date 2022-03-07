//import React from 'react'
import { useState } from 'react';

function Feedback() {

  const [rating, setRating] = useState(0);
  const handleRating = () => {
    setRating((prev) => {
      //console.log(prev)
      return prev + 1;
    });
  }

  const [text, setText] = useState("Please explain the rating you gave!")

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '3rem'}}>
      <h2>Rating: {rating}</h2>
      <p>An example: {text}</p>
      <button onClick={handleRating}>Give Feedback</button>

    </div>
  )
}

export default Feedback;