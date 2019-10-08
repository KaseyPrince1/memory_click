import React from "react";


function Title(props) {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/"> 
        <h1 className='title'> Clicky Game </h1> 
        <ul> Your Score: {props.score} </ul>
        <ul> High Score: {props.highScore} </ul>
      </a>
    </nav>
  </div>
  );
}

export default Title;
