import React from 'react';
// import the style sheet
import '../style.css';

const Home = () => {

  return (
    <div className="home" style={{ textAlign: 'center', padding: '5px' }}>
        <h1>Home</h1>
        <h2>This is a website that helps you do your daily tasks serving God and others!</h2>
        <p>Click on the Daily button to get a random task to do today.</p>
        <p>Click on the Tasks button to see a list of tasks to do.</p>
        <p>Click on the About button to learn more about this website.</p>
    </div>
  );
};

export default Home;