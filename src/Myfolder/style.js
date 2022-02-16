
import React from 'react'

function Header(props) {

  const paragraphStyles = { //2) styled in a variable passed in below
    backgroundColor: 'green', 
    color: 'red',
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
    
    <header >
      <div className="container">
        
        <p style={paragraphStyles}>props.moreText</p>
      </div>
    </header>
  )
}

export default Header;

//4 WITH DEFAULT PROPS - nothing in APP - not entirely sure if it's correct!

function Header() {
  
  return (
    
    <header >
      <div className="container">
        
        <p style={bgColor, textColor}>props.moreText</p>
      </div>
    </header>
  )
}
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
}


Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header;