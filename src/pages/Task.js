import React from 'react';
import TaskBox from '../components/Task';
import '../style.scss';
import { fetchTask } from '../Utils.js';
import { useParams } from 'react-router-dom';

// var verses = ["John 3:16", "Matthew 6:33", "Isaiah 40:31", "John 14:6", "Philippians 4:13", "Isaiah 41:10", "Matthew 11:28-30", "John 15:5", "Matthew 7:7-8", "Proverbs 3:5-6", "James 1:22-25", "Matthew 5:16", "Proverbs 16:3", "Matthew 6:9-13", "Romans 8:28", "Psalms 23:1-6", "Proverbs 17:17", "Matthew 22:37-40", "Philippians 4:6-7", "Romans 12:2", "Proverbs 3:5-6", "Matthew 6:25-34", "Isaiah 26:3", "Matthew 28:18-20", "John 10:10", "Proverbs 3:5-6", "Isaiah 54:17", "Matthew 7:21", "Romans 8:38-39", "Proverbs 3:5-6", "1 Corinthians 13:4-8", "James 4:8", "Proverbs 3:5-6"];
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