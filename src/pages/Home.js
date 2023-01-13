import React from 'react';
// import the style sheet
import '../style.scss';

const Home = () => {

  return (
    // Put spacee between every element
    <div className='content'>
        <h3 style={{fontSize: '30px'}}>Welcome to FaithTasks!</h3>

        <h3>Go to the <a href="/daily">Daily</a> page to get the daily task!</h3>

        <h3>Go to the <a href="/history">History</a> page to get a random task from the past!</h3>

        <h3>Go to the <a href="/about">About</a> page to learn more about this website!</h3>
    </div>
  );
};

export default Home;