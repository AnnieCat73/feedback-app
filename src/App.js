import Header from "./components/Header";
import PropsPractice from "./PropsPractice";

import './index.css';

function App() {
  

  return (
    <div>
      <Header />
      <PropsPractice 
        text="Hello World"
        moreText="How are you?"/>
      <div className='container'>
      
      

      
      </div>
    </div>
    
    
  );
}

export default App;