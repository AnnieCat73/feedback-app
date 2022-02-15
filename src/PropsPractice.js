import React from 'react'

/*function PropsPractice(props) {
  return (
    <div className="container">
      <h2>{props.text}</h2>
      <p>{props.moreText}</p>

    </div>
  )
}

export default PropsPractice;*/

function PropsPractice({ text, moreText }) {
  return (
    <div className="container">
      <h2>{text}</h2>
      <p>{moreText}</p>

    </div>
  )
}

export default PropsPractice;