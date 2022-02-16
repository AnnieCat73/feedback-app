import React from 'react'


function PropsPractice(props) {
  const paraStyles = {
    color: 'limeGreen',
    fontSize: '2rem',
    backgroundColor: 'red',
  }

  const propsStyle = {//2) could add a prop style like this and add it to below and then link it in app like <Header fontSize="2rem"
    fontSize: '2rem'
  }
  
  return (
    <div className="container" >
      <h2 style={{backgroundColor: 'red', color: 'black'}}>
        {props.text}</h2>
      <p style={propsStyle}>{props.moreText}</p>

    </div>
  )
  
}

export default PropsPractice;

