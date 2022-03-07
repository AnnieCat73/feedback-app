import React from 'react'

function Propsprac( {text, moreText, number} ) {
  const paragraphStyle = {
    fontSize: '30px',
    color: 'magenta'

  }
  return (
    <div style={{width: '50rem', display: 'flex', justifyContent: 'space-between'}}>
      <h1>{text}</h1>
      <p style={{alignSelf: 'center'}}>{moreText}</p>
      <p style={paragraphStyle}>Add 2 plus {number}</p>
    </div>
  )
}

export default Propsprac;