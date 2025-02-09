import React from 'react';
import TaskBox from '../components/Task.js';
import '../style.scss';
import { fetchTask } from '../Utils.js';

// The route is /:date so we need to get the date from the URL.
const Search = ({ date }) => {
  const task = fetchTask(date);

  return (
    <div className='content'>
      <TaskBox date={ task.date } task={ task.task }/>
    </div>
  )};

export default Search;