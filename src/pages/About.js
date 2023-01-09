import React from 'react';
// import the style sheet
import '../style.css';

const Home = () => {

  return (
    <div className="about" style={{ textAlign: 'center', padding: '5px' }}>
        <h1>About</h1>
        <h2>This is a website that helps you do your daily tasks serving God and others!</h2>
        <p>Click on the Daily button to get a random task to do today.</p>
        <br></br>
        <h1>FAQ</h1>
        <h2>What is a God Task?</h2>
        <p>A God Task is a task that helps you serve God and others.</p>
        <h2>How do I do a God Task?</h2>
        <p>Click on the Daily button to get a random task to do today.</p>
        <h2>How do I add a God Task?</h2>
        <p>Click on the Tasks button to see a list of tasks to do.</p>
    </div>

  );
};

export default Home;