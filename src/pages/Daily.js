import React from 'react';
import Task from '../components/Task';
// import the style sheet
import '../style.css';
import { fetchDailyTask } from '../Utils.js';

const Daily = () => {
  const { date, task } = fetchDailyTask();


  return (
    <Task date={date} task={ task } refresh={false} />
  );
};

export default Daily;