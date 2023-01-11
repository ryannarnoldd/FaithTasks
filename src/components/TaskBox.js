import React from 'react';
// import the style sheet
import '../style.css';
import { getDateString } from '../Utils';


const TaskBox = ({ date, task: { title, description, verse }}) => {
  function copyToClipboard() {
    // copy link to clipboard.
    navigator.clipboard.writeText(window.location.href)
    document.getElementById("copied").style.display = "inline";
    setTimeout(() => {
        document.getElementById("copied").style.display = "none";
    }, 1000);
  }
  
  return (
    <div className="task">
        {title && description && verse ? (
        <>
            <h1>{getDateString(date)}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><strong>{verse}</strong></p>
            
            <button onClick={ copyToClipboard }>Share!</button>
            <span id="copied" style={{display: 'none'}}>Copied!</span>
        </>
        ) : ( <h2>There are no tasks to do today.</h2> )}
    </div>
  );
};

export default TaskBox;