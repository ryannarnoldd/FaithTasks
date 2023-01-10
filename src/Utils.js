import tasks from './data/tasks.json';
import history from './data/history.json';

export const getCurrentDate = () => new Date().toLocaleString("en-CA", {timeZone: "America/New_York"}).split(',')[0];

export const fetchRandomTask = () => tasks[Math.floor(Math.random() * Object.keys(tasks).length)];

export const fetchDailyTask = () => tasks[history[getCurrentDate()].taskID] || { title: 'There are no tasks to do today.', description: '', verse: '' };