//import { useState } from 'react';
//import Header from "./components/Header";
//import FeedbackList from "./components/FeedbackList";
//import FeedbackData from './data/FeedbackData';
import './index.css';


const comments = [
  {id: 1, text: "Comment one"},
  {id: 2, text: "Comment two"},
  {id: 3, text: "Comment three"}
]

const moreComments = comments.map((comment, index) => (
  <li key={index}>{comment.text}</li>
))
function App() {
  const title = "Blogs";
  
  return (
    <div>
      <h1>{title}</h1>
      {/*}<ul>
        {comments.map((comment,index) => (
          <li key={index}>{comment.text}</li>
        ))}
        </ul>*/}
      <ul>{moreComments}</ul>     
    </div>
    
    
  );
}

export default App;