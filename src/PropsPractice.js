import React from 'react'

function PropsPractice(props) {
  return (
    <div className="container">
      <h2>{props.text}</h2>
      <p>{props.moreText}</p>

    </div>
  )
  
}

export default PropsPractice;

