//Component level state - only accessed in the component it is in not in. Can'taccess it from other components etc - f.ex a is-navigiation-open is set to true or false
//Global or App level state - need to use a state from a components in other components - so share the state among multiple components

//with { useState } hook EXAMPLE

import React from 'react'
import { useState } from 'react';//1) UseState hook

function FeedbackItem() {
  
  const [rating, setRating] = useState(7);//2) SETTING STATE USING DESTRUCTURING/a) new variable declared, rating, b)and it's initial state we set to 7. C) setRating is a function we set up to update the state rating
  const [text, setText] = useState('This is an example of a feedback item');

  const handleClick = () => { //5)what function does when click on button
    setRating((prev) => {       
      console.log(prev);      //Here we use setRating defined above
      return prev + 1;        //can set prev as in previous value if need access to it
    });                       //here returns previous value i.e 7 and adds 1
  }

  return (
    <div className='card'>
      <div className="num-display">{rating}</div>{/*3)Where rating state goes*/} 
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}>Click</button>{/*4)Where we fire off a function to change state*/} 
    </div>
  )
}

export default FeedbackItem;

//ANOTHER EXAMPLE

/*import { useState } from 'react';
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import './index.css';

function App() {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ])

  return (
    <div>
      <Header />
      <div className='container'>
      
        <FeedbackItem />

      
      </div>
    </div>
    
    
  );
}

export default App;*/