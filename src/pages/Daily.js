import React from 'react';
import TaskBox from '../components/TaskBox';
import '../style.scss';
import { fetchDailyTask } from '../Utils.js';

const Daily = () => {
  const { date, task } = fetchDailyTask();

  return (
    <div className='content'>
      <h3> Find the daily task updated every midnight! </h3>
      <br />
      <TaskBox date={date} task={ task } />
    </div>
  );
};

export default Daily;