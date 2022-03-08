import './index.css';

const animals = [
  {id: 1, type: "cat", color: "white"},
  {id: 2, type: "dog", color: "brown"},
  {id: 3, type: "hamster", color: "beige"}
];

const animalsAll = animals.map((animal, index) => {
  return <li key={index}>{animal.type} and {animal.color}</li>

}) //1) CAN BE DEFINED HERE WITH  return and { OR


function App() {
  const animalsAll = animals.map((animal, index) => (
     <li key={index}>{animal.type}{animal.color}</li>
  )) // 2) OR AS JSX WITH ( and without return here

  const animalsAll = animals.map((animal, index) => {
    return <li key={index}>{animal.type} and {animal.color}</li>
  })//1 CAN ALSO BE DEFINED HERE WITH return AND {
  
  return (
    <div>
      <ul>
        {animalsAll}
      </ul>
    </div>
    
    
  );
}
export default App;

//State example 

import { useState, useEffect } from 'react';
//import Header from "./components/Header";
//import FeedbackList from "./components/FeedbackList";
//import FeedbackData from './data/FeedbackData';
import Feedback from './Myfolder/Exercises/Feedback';
//import React from 'react';

import './index.css';





function App() {
  const [feedback, setFeedback] = useState(6)

  {/**2nd way to set feedback here pointing to below */}
  const handleFeedback = () => {
    setFeedback((currentNo) => {
      return currentNo + 1;
    })
  }
    
 
  return (
   <div>
     <Feedback />
     
      <h2>Feedback is: {feedback}</h2> 
      <button onClick={() => setFeedback(currentNo => currentNo + 1)}>Add feedback</button>{/**1 way to set feedback */}
      <input value={feedback}  />{/**2nd way to set feedback pointing to above */}
      <button onClick={handleFeedback}>Add feedback</button>
    </div>
      
   
    
  );
}

export default App;

/*//////////////////////////////////////////////////////////*/

import React from 'react'
import Header from '../style';

function Styling() {
  const paragraphStyles = {
    color: 'limegreen',
    fontSize: '1rem',
    backgroundColor: 'white'

  }
  return (
    <header>
      <div>
        <h2 style={{backgroundColor: 'pink', fontSize: '2rem'}}>I am a heading level 2</h2>
        <p style={{color: 'white'}}>I am a paragraph!</p>
        <p>I am another paragraph!!!!!!!!!</p>
        <p style={paragraphStyles}>More paragraphs..........</p>
        <p style={bgColor}>HAkjsdkfjdsk</p>
      </div>
    </header>
    
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'red',
  textColor: '#ff6a95'
}
export default Styling;