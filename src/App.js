//import { useState } from 'react';
//import Header from "./components/Header";
//import FeedbackList from "./components/FeedbackList";
//import FeedbackData from './data/FeedbackData';
import './index.css';



const animals = [
  {id: 1, type: "cat", color: "white"},
  {id: 2, type: "dog", color: "brown"},
  {id: 3, type: "hamster", color: "beige"}
];




function App() {
  const title = "Blogs";
  {/*}const animalsAll = animals.map((animal, index) => (
     <li key={index}>{animal.type}{animal.color}</li>

  ))*/}
  const animalsAll = animals.map((animal, index) => {
    return <li key={index}>{animal.type} and {animal.color}</li>
  
  })
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {animalsAll}
      </ul>
     
    </div>
    
    
  );
}

export default App;