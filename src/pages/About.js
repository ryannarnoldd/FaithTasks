import React from 'react';
// import the style sheet
import '../style.css';

const Home = () => {

  return (
    <div className="about" style={{ textAlign: 'center', padding: '5px' }}>
        <h1>About</h1>
        <br></br>
        <h2>This is a website that helps you do your daily tasks serving God and others!</h2>
        <br></br>
        <p>Click on the Daily button to get a random task to do today.</p>
        <p>Click on the Random button to see a random task to do.</p>
    </div>
  );
};

export default Home;