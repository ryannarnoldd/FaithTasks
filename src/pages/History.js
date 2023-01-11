import React from 'react';
import { useParams } from 'react-router-dom';
import TaskBox from '../components/TaskBox';
// import the style sheet
import '../style.css';
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
    if (date && date <= getCurrentDate()) {
      window.location.href = `history/${date}`;
    }
    else {
      // TODO: add error message
    }
  }


  // const { date, task } = fetchTask(useParams().date) || fetchRandomTask() ? (useParams().date <= getCurrentDate()) : (fetchRandomTask());


  return (
    // The TaskBox is on the left of the content.
    <div style={{ textAlign: 'center', padding: '5px', justifyContent: 'center' }}>
      <h3> Get a random task (that was used in the past) here!</h3> 
      
      <label for="date">Date: </label>
      <input type="date" id="date" name="date" min="2020-01-01" max={getCurrentDate()}/> <button onClick={setTask}>Get Task</button>
      <TaskBox date={date} task={ task } />
    </div>
  );
};

export default History;