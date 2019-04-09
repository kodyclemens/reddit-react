import React, { Component } from 'react'
import NavBar from './NavBar';
import error from '../images/404.png';

class NotFound extends Component {
  render () {
    return(
      <>
        <NavBar />
        <div className="container not-found">
          <p>This is not the page you are looking for!</p>
          <img src={error} alt="Funny Error"></img>
          <br></br>
      </div>
      </>
    )
  }
}

export default NotFound