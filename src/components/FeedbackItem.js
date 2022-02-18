import React from 'react'


function FeedbackItem({ item }) {
  
  return (
    <div className='card'>
      <div className="num-display">{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      
    </div>
  )
}

export default FeedbackItem;

/*SAME AS 
function FeedbackItem(props) {
  
  return (
    <div className='card'>
      <div className="num-display">{props.rating}</div>
      <div className='text-display'>{props.text}</div>
      
    </div>
  )
}

export default FeedbackItem;*/
