import React from 'react';
import TaskBox from '../components/TaskBox';
// import the style sheet
import '../style.css';
import { fetchDailyTask } from '../Utils.js';

const Daily = () => {
  const { date, task } = fetchDailyTask();


  return (
    <div>
    <h3> Find the daily task updated every day at midnight! </h3>
    <TaskBox date={date} task={ task } />
    </div>
  );
};

export default Daily;