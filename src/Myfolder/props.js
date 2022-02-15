import Header from "./components/Header";

//A 1 Here in <Header /> created a prop called text="Hello World"
function App() {
  
  return (
    <div>
      <Header text="Hello World"/>
      <div className='container'>
      
        <h1>My App</h1>
      </div>
    </div>
  );
}

export default App;

//2 in Header.js use props to connect it to the component and then where it goes use props and name of it i.e text
//SO GOES IMPORT THE HEADER COMPO THEN CREATE A PROP WITH VALUE THEN USE PROPS TO GET IT BACT TO COMPONENT AND PROPS.VALUE INTO WHERE IT'S NEEDED
import React from 'react'

function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  )
}

export default Header;

/*B OR DESTRUCTURED instead of using props
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

/////////////////////////////////////

//C NEW IN REACT - not using props by doing this so in app remove text prop

import Header from "./components/Header";
function App() {
  
  return (
    <div>
      <Header />
      <div className='container'>
        <Header />
        <h1>My App</h1>
      </div>
    </div>
  );
}
export default App;

//then in Header do

function Header(props) {
  return (
    
    <header>
      <div className="container">
        <h2>{props.text}</h2>
        <p>{props.moreText}</p>
      </div>
    </header>
  )
}
Header.defaultProps = {
  text: 'Feedback UI',
  moreText: 'HE HE HE!'
}
export default Header;


//D PropTypes where you can specify it it's a string or a number or function. CAN MAKE YOUR APPLICATION MORE ROBUST
//SO IN Header import this
import PropTypes from 'prop-types';
//THEN SAME AS ABOVE EX
function Header(props) {
  return (
    
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  )
}
Header.defaultProps = {
  text: 'Feedback UI'
}

//THE HERE DEFINE
Header.propTypes = {
  text: PropTypes.string
}
export default Header;

