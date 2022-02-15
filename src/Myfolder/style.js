
import React from 'react'

function Header(props) {

  const paragraphStyles = { //1) styled in a variable passed in below
    backgroundColor: 'green', 
    color: 'red',
  }

  const propsStyle = {//2) could add a prop style like this and add it to below and then link it in app like <Header fontSize="2rem"
   fontSize: fontSize,
  }
  return (
    
    <header style={{backgroundColor: 'blue', color: 'red'}}>{/*£)Inline styleing*/}
      <div className="container">
        <h2>{props.text,propsStyle}</h2>
        <p>{paragraphStyles}Hello</p>
      </div>
    </header>
  )
}

export default Header;