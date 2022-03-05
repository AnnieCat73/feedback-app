//import { useState } from 'react';
//import Header from "./components/Header";
//import FeedbackList from "./components/FeedbackList";
//import FeedbackData from './data/FeedbackData';
import './index.css';


const numbers = [1, 2, 3, 4, 5]



function App() {
  const happy = true;
  const unhappy = true;

  if(happy) return <h1>Happy....</h1>
  
 
  return (
    <div>
      {unhappy ? (
          <div>
          <h3>{numbers.length}</h3>
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))};
          </ul>
        </div>
      ) : (
        'yes' 
      )}
    </div>
    
    
  );
}

export default App;