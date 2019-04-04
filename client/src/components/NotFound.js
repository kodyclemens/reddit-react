import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import error from '../images/404.png';

class NotFound extends Component {
  render () {
    return(
      <>
        <NavBar />
        <div className="container not-found">
          <p>This is not the page you are looking for!</p>
          <img src={error}></img>
          <br></br>
      </div>
      </>
    )
  }
}

export default NotFound