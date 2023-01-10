// import tasks from './data/tasks.json';
import history from './data/history.json';

export const getCurrentDate = () => new Date().toLocaleString("en-CA", {timeZone: "America/New_York"}).split(',')[0];

export const getDateString = (date) => {
    const [year, month, day] = date.split('-')
    const dateObj = new Date(year, month-1, day);
    return dateObj.toLocaleDateString("en-US", {timeZone: "America/New_York", year: 'numeric', month: 'long', day: 'numeric'})
}

export const fetchRandomTask = () => {
    const tasksBeforeToday = Object.keys(history).filter(key => key < getCurrentDate());
    const randomTask = tasksBeforeToday[Math.floor(Math.random() * tasksBeforeToday.length)];

    return {
        date: randomTask,
        task: history[randomTask]
    }

}

export const fetchDailyTask = () => {
    return {
        date: getCurrentDate(),
        task: history[getCurrentDate()] || { title: 'There are no tasks to do today.', description: '', verse: '' }
    }
}

export const fetchTask = (date) => {
    return {
        date: date,
        task: history[date] || { title: 'This task could not be found.', description: '', verse: '' }
    }
}