import '../style.scss';
import { getCurrentDate } from '../Utils.js';
// import React, { useState } from 'react';

const TaskSearch = () => {
    // const [ disabled, setDisabled ] = useState(true);
    const START_DATE = "2023-01-01";
    let date;

    const validateDate = (date) => (date && START_DATE <= date && date < getCurrentDate())

    const setTask = () => {
        date = document.getElementById('date').value;
        if (validateDate(date)) { 
            window.location.href = `/task/${date}`; 
        }
        else {
            window.location.href = `/`;
        }
    }

  return (
    <div className='taskSearch'>
        <input type="date" id='date' min={START_DATE} max={getCurrentDate()}/>
        <button id='getTask' onClick={setTask}>Get Task</button>
    </div>
  );
};

export default TaskSearch;