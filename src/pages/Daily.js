import React from 'react';
import Task from '../components/Task';
// import the style sheet
import '../style.css';
import { fetchDailyTask } from '../Utils.js';

const Daily = () => {
  return (
    <Task task={ fetchDailyTask() } refresh={false} />
  );
};

export default Daily;