import React from 'react';
import TaskBox from '../components/Task';
import '../style.scss';
import { fetchTask } from '../Utils.js';
import { useParams } from 'react-router-dom';

const Task = () => {
    var { date } = useParams();
    var task = fetchTask(date).task;

    return (
        <div className='content'>
            <TaskBox date={date} task={ task } />
        </div>
    );
};

export default Task;