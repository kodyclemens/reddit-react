import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';

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

const mapPropsToDispatch = dispatch => ({
  setPersisted: dispatch(setPersisted())
})

export default connect(mapPropsToState, mapPropsToDispatch)(Home);