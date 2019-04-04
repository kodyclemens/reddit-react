import React from 'react';
import NavBar from './NavBar';

const About = () => {
  return (
    <>
      <NavBar />
      <div className="container about">
        <img src="http://cdn1.hubspot.com/hub/69751/Wordmark.png"></img>
        <p>This is my final <a href="https://flatironschool.com" target="_blank" rel="noopener noreferrer">Flatiron School</a> project.</p>
        <p>This application uses React with Redux, Rails and the Reddit API. Rails handles the data persistence and serves multiple API endpoints. Please check out my <a href="https://kodyclemens.com/2019/04/04/reddit-browser-react-redux-project/" target="_blank" rel="noopener noreferrer"> blog post</a> on the development process.</p>
        <p>For more information and other projects check out my <a href="https://github.com/kodyclemens" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/kody-clemens/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profiles.</p>
      </div>
    </>
  )
};

export default About;