import React from 'react';
import '../style.scss';
import { fetchDailyTask } from '../Utils.js';
import Task from '../components/Task';
const { date, task } = fetchDailyTask();

const Home = () => {

  return (
    <div className='content'>
        <Task date={ date } task={ task }/>
    </div>
  );
};

export default Home;