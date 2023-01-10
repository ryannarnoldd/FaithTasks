import React from 'react';
import Task from '../components/Task';
// import the style sheet
import '../style.css';
import { fetchRandomTask } from '../Utils.js';

const Random = () => {
  return (
    <Task task={ fetchRandomTask() } refresh={true} />
  );
};

export default Random;