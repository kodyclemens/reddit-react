import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return(
      <NavBar />
    )
  };
};

const mapPropsToState = state => {
  return state;
}

export default connect(mapPropsToState)(Home);