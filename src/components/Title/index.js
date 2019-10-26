import React from "react";


function Title(props) {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/"> 
        <h1 className="title"> {props.children} </h1> 
        <ul> Your Score: {props.score} </ul>
        <ul> High Score: {props.highscore} </ul>
      </a>
    </nav>;
}

export default Title;
