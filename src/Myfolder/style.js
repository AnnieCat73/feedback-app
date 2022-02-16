
import React from 'react'

function Header(props) {

  const paragraphStyles = { //2) styled in a variable passed in below
    backgroundColor: 'green', 
    color: 'red',
  }

  const propsStyle = {//2) could add a prop style like this and add it to below and then link it in app like <Header fontSize="2rem"
   fontSize: fontSize,
  }
  return (
    
    <header style={{backgroundColor: 'blue', color: 'red'}}>{/*1)Inline styleing*/}
      <div className="container">
        <h2 style={{backgroundColor: 'red', color: 'black'}} >
          {props.text}</h2>
        <p style={paragraphStyles}>props.moreText</p>
      </div>
    </header>
  )
}

export default Header;

//3) OR COULD DO

//in APP define the css
function App() {
  
  return (
    <div>
      <Header bgColor="red" textColor="black"/>
      
      <div className='container'>
      </div>
    </div>
  );
}
//then in Header 
function Header({ moreText, bgColor, textColor}) {
  const paragraphStyles = { 
    backgroundColor: bgColor, 
    color: textColor,
  }
  
  return (
    
    <header style={{backgroundColor: 'blue', color: 'red'}}>{/*1)Inline styleing*/}
      <div className="container">
        
        <p style={paragraphStyles}>props.moreText</p>
      </div>
    </header>
  )
}

export default Header;