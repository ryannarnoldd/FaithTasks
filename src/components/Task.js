import React from 'react';
// import the style sheet
import '../style.css';
import { getDateString } from '../Utils';

const Task = ({ date, task: { title, description, verse }, refresh }) => {
  return (
    <div className="task">
        {title && description && verse ? (
        <>
            <h1>{getDateString(date)}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><strong>{verse}</strong></p>
            {refresh 
                ? ( <button onClick={() => window.location.reload(false)}>Refresh</button>) 
                : ( <p>The next task will be released at <strong>Midnight</strong></p> )
            }   
        </>
        ) : ( <h2>There are no tasks to do today.</h2> )}
    </div>
  );
};

export default Task;