import { useState, useEffect } from 'react';
//import Header from "./components/Header";
//import FeedbackList from "./components/FeedbackList";
//import FeedbackData from './data/FeedbackData';
import Feedback from './Myfolder/Exercises/Feedback';
//import React from 'react';

import './index.css';





function App() {
  const [feedback, setFeedback] = useState(6)

  
    
 
  return (
   <div>
     <Feedback />
     
      <h2>Feedback is: {feedback}</h2> 
      <button onClick={() => setFeedback(prev => prev + 1)}>Add feedback</button>
      <input value={feedback}  />
      
      
     
     
   </div>
      
   
    
  );
}

export default App;