import Header from "./components/Header";
import PropsPractice from "./PropsPractice.js";

import './index.css';

function App() {
  

  return (
    <div>
      <Header />
      <PropsPractice 
      text="I am a PROP!"
      moreText="I am a paragraph!"/>
      <div className='container'>
      
      

      
      </div>
    </div>
    
    
  );
}

export default App;