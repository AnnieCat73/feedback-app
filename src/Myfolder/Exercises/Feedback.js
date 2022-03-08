//import React from 'react'
import { useState, useEffect } from 'react';


function Feedback() {

  const [rating, setRating] = useState(0);
  const handleRating = () => {
    setRating((prev) => {
      //console.log(prev)
      return prev + 1;
    });
  }

  const [text, setText] = useState("");
  
  useEffect(() => {
    console.log(text);
  })


  return (
    <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '3rem'}}>
      <h2>Rating: {rating}</h2>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <p>Please explain the rating you gave:</p>
        <input style={{maxWidth: '7rem', marginLeft: '1em', height: '1.2rem'}} value={text} onChange={e => setText(e.target.value)}/>
      </div>
      

      <button onClick={handleRating}>Give Feedback</button>

    </div>
  )
}

export default Feedback;