import React from 'react';
// import the style sheet
import '../style.scss';

const About = () => {

  return (
    <div className='content' style={{na: '20px'}}>
      <h3 style={{fontSize: '30px'}}>Who We Are?</h3>

      <h3>We provide daily faith-based tasks to help strengthen your walk with God</h3>

      <h3>Our tasks are simple and easy to incorporate into daily life, but also meaningful and impactful.</h3>
        
      <h3>From scripture, serving, praying, and meditating, our tasks will deepen your relationship with God.</h3>

      <h3>We also have a <a href="https://discord.gg/your-server-link" class="btn">Discord community</a> to share thoughts and struggles with our daily tasks. <br />We would love to have you join us!</h3>

      <h3>I attend <a href="https://www.calvarychapelhighland.com/">Calvary Chapel Highland</a>. Click the website if interested in joining!</h3>

      <h3>If you have any questions or feedback, please don't hesitate to reach out to <a href="mailto:FaithTasks@gmail.com">FaithTasks@gmail.com</a></h3>

      <h3>Follow us on <a href="https://www.instagram.com/faithtasks">Instagram</a> for daily updates!</h3>

    </div>
  );
};

export default About;