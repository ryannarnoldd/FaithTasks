import React from 'react';
// import the style sheet
import '../style.scss';

const About = () => {

  return (
    <div className="about" style={{ textAlign: 'center', padding: '25px' }}>

      <h1>Welcome to FaithTasks!</h1>

      <h3>Each day, we provide daily faith-based tasks to help strengthen your walk with God</h3>

      <h3>Our tasks are simple and easy to incorporate into your daily routine, but also meaningful and impactful.</h3>
        
      <h3>From reading scripture, serving others, to praying for others and meditating, our tasks will deepen your relationship with God.</h3>

      <h3>We also have a <a href="https://discord.gg/your-server-link" class="btn">Discord community</a> where you can share your thoughts, struggles, and successes with our daily tasks. We would love to have you join us!</h3>

      <h3>We attend <strong>Calvary Chapel Highland</strong> and if you are interested in joining, please visit the website <a href="https://www.calvarychapelhighland.com/">www.CalvaryChapelHighland.com</a></h3>

      <h3>If you have any questions or feedback, please don't hesitate to reach out to us at <a href="mailto:ryannarnoldd@gmail.com">ryannarnoldd@gmail.com</a></h3>

    </div>
  );
};

export default About;