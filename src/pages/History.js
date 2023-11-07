import React from 'react';
import TaskBox from '../components/Task';
import '../style.scss';
import { fetchRandomTask } from '../Utils.js';

const History = () => {
  var randomTask = fetchRandomTask();

  console.log("fwefwef");

  return (
    <div className='content'>
      <TaskBox date={ randomTask.date } task={ randomTask.task }/>
    </div>
  );
};

export default History;