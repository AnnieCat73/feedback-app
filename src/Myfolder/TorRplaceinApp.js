import { useState } from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import './index.css';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div>
      <Header />
      <div className='container'>
      
        <FeedbackList feedback={feedback}/>

      
      </div>
    </div>
    
    
  );
}

export default App;

//PUT THIS BACK IN APP.JS ONCE FINISHED PRACTICING