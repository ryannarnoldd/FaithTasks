import React from 'react';
import Task from '../components/Task';
// import the style sheet
import '../style.css';
import { fetchRandomTask } from '../Utils.js';

const Random = () => {
  const { date, task } = fetchRandomTask();


  return (
    <div style={{ textAlign: 'center', padding: '5px' }}>
      <h3> Get a random task (that was used in the past) here!</h3> 
      
      <label for="date">Date: </label>
      <input type="date" id="date" name="date" />
      <Task date={date} task={ task } refresh={true} />
    </div>
  );
};

export default Random;