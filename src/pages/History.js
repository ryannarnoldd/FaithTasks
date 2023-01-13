import React from 'react';
import { useParams } from 'react-router-dom';
import TaskBox from '../components/TaskBox';
import '../style.scss';
import { fetchRandomTask, fetchTask, getCurrentDate } from '../Utils.js';

const History = () => {
  var { date } = useParams();
  let task;

  if (date && date <= getCurrentDate()) {
    task = fetchTask(date).task;
  } else {
    const randomTask = fetchRandomTask();
    date = randomTask.date;
    task = randomTask.task;
  }

  const setTask = () => {
    date = document.getElementById('date').value;
    if (date && "2023-01-01" <= date && date <= getCurrentDate()) {
      window.location.href = `${date}`;
    }
    else {
      // Current bad way of handling errors.
    }
  }

  return (
    
    <div className='content'>
      <h3> Get a random task (used in the past) here!</h3> 
      
      <TaskBox date={date} task={ task } />
      <br />



      <h3> Or, get a task from a specific date! </h3> 
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <input type="date" name="date" min="2020-01-01" max={getCurrentDate()} onBlur={setTask} style={{fontSize: '20px'}} />
        <button onClick={setTask} style={{fontSize: '20px', marginLeft: '10px'}}>Get Task</button>
      </div>
      <br />
      <h5>Works any date from 01-01-2023 to today!</h5>

    </div>
  );
};

export default History;