import React from 'react'

function Header(props) {
  return (
    
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>

    
    
  )
}

export default Header;

/*OR DESTRUCTURED instead of using props
function Header({ text }) {
  return (
    
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>

    
    
  )
}

export default Header;*/

