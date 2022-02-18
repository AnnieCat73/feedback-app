import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({feedback}) { //deconstructed
  //If no feedback this displays
  if(!feedback || feedback.length === 0 ) {
    return <p>No Feedback Yet</p>
  }
  return (
    /*Gets it from FeecbackItem*/
    <div className="feedback-list">
      {feedback.map((item) => ( 
        <FeedbackItem key={item.id} item={item} />
      ))};
    </div>
  )
}

export default FeedbackList;

