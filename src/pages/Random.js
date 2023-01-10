import React from 'react';
import Task from '../components/Task';
// import the style sheet
import '../style.css';
import { fetchRandomTask } from '../Utils.js';

const Random = () => {
  const { date, task } = fetchRandomTask();


  return (
    <Task date={date} task={ task } refresh={true} />
  );
};

export default Random;