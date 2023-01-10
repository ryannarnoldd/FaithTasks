import React from 'react';
import Task from '../components/Task';
// import the style sheet
import '../style.css';
import { fetchDailyTask } from '../Utils.js';

const Daily = () => {
  const { date, task } = fetchDailyTask();


  return (
    <div>
    <h3> Find the daily task updated every day at midnight! </h3>
    <Task date={date} task={ task } refresh={false} />
    </div>
  );
};

export default Daily;