import React from 'react';
import { useParams } from 'react-router-dom';
import TaskBox from '../components/TaskBox';
// import the style sheet
import '../style.css';
import { fetchRandomTask, fetchTask, getCurrentDate } from '../Utils.js';

const Tasks = () => {
  var { date } = useParams();
  let task;

  if (date && date <= getCurrentDate()) {
    task = fetchTask(date).task;
  } else {
    const randomTask = fetchRandomTask();
    date = randomTask.date;
    task = randomTask.task;
  }


  // const { date, task } = fetchTask(useParams().date) || fetchRandomTask() ? (useParams().date <= getCurrentDate()) : (fetchRandomTask());


  return (
    <div style={{ textAlign: 'center', padding: '5px' }}>
      <h3> Get a random task (that was used in the past) here!</h3> 
      
      {/* <label for="date">Date: </label>
      <input type="date" id="date" name="date" /> <button onClick={ getTask(date.value) }>Get Task</button> */}
      <TaskBox date={date} task={ task } refresh={true} />
    </div>
  );
};

export default Tasks;