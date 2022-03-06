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