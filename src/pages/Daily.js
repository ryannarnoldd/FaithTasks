import React from 'react';
// import the style sheet
import '../style.css';
import tasks from '../data/tasks.json';

const Daily = () => {
  const category = tasks[Object.keys(tasks)[Math.floor(Math.random() * Object.keys(tasks).length)]]

  const color = category.color
  const task = category.tasks[Math.floor(Math.random() * category.tasks.length)]
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  // Create a random date Object from 2020-01-01 to today
  const dateObj = new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 365)));
  const dateArr = dateObj.toLocaleDateString('en-us', options).split(', ')
  const date = `${dateArr[1]}, ${dateArr[2]}`

  return (
    <div className="daily">
      {task ? (
        <>
          <h1>{date}</h1>
          <h2 style={{ color: color }}>{task.title}</h2>
          <p>{task.description}</p>
          <p><strong>{task.verse}</strong></p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Daily;