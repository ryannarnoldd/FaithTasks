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
      <br />
      
      <TaskBox date={date} task={ task } />
      <br />

      <input type="date" name="date" min="2020-01-01" max={getCurrentDate()} onBlur={setTask} style={{fontSize: '20px'}} />
      <br />
      <h6>Works any date from 2023-01-01 to today!</h6>

    </div>
  );
};

export default History;