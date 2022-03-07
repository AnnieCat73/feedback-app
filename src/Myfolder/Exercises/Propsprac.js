import React from 'react'

function Propsprac( {text, moreText} ) {
  return (
    <div style={{width: '50rem', display: 'flex', justifyContent: 'space-between'}}>
      <h1>{text}</h1>
      <p style={{alignSelf: 'center'}}>{moreText}</p>
    </div>
  )
}

export default Propsprac;