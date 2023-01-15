import '../style.scss';
import { getCurrentDate } from '../Utils.js';
import React, { useState } from 'react';

const TaskSearch = () => {
    const [ disabled, setDisabled ] = useState(true);
    const START_DATE = "2020-01-01";
    let date;

    const checkDate = () => {
        date = document.getElementById('date').value;
        setDisabled(false ? (date && START_DATE <= date && date < getCurrentDate()) : true);
        console.log(disabled);
    }

    const setTask = () => {
        date = document.getElementById('date').value;
        if (date) { window.location.href = `/task/${date}`; }
    }

  return (
    <div className='taskSearch'>
        <input type="date" id='date' onChange={checkDate} min={START_DATE} max={getCurrentDate()}/>
        <button id='getTask' onClick={setTask}>Get Task</button>
    </div>
  );
};

export default TaskSearch;