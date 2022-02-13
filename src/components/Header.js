import { buildQueries } from '@testing-library/react';
import React from 'react'


function Header(props) {

  const paragraphStyles = { //styled in a variable passed in below
    backgroundColor: 'green', 
    color: 'red',
  }

  const propsStyle = {//could add a prop style like this and add it to below and then link it in app like <Header propsStyle="2rem"
   fontSize: fontSize,
  }
  return (
    
    <header style={{backgroundColor: 'blue', color: 'red'}}>{/*Inline styleing*/}
      <div className="container">
        <h2>{props.text,propsStyle}</h2>
        <p>{paragraphStyles}Hello</p>
      </div>
    </header>

    
    
  )
}

export default Header;

/*OR DESTRUCTURED instead of using props
function Header({ text }) {
  return (
    
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>

    
    
  )
}

export default Header;*/

