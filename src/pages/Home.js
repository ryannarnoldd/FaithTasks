import React from 'react';
// import the style sheet
import '../style.scss';
import { fetchDailyTask } from '../Utils.js';
import Task from '../components/Task';
import TaskSearch from '../components/TaskSearch';
const { date, task } = fetchDailyTask();

const Home = () => {

  return (
    <div className='content'>
        {/* <h3 style={{fontSize: '30px'}}>Welcome to FaithTasks!</h3> */}
        <Task date={date} task={ task } />
        <br />
        <h3> Or, get a task from a specific date! </h3> 
        <TaskSearch />
        <h5>Works any date from 01-01-2023 to today!</h5>
    </div>
  );
};

export default Home;