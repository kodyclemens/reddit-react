import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';

class Home extends Component {

  render() {
    console.log(this.props.posts)
    return(
      <React.Fragment>
        <NavBar />
      </React.Fragment>
    )
  };
};

const mapPropsToState = state => {
  return {posts: state.posts.persisted};
}

const mapPropsToDispatch = dispatch => ({
  setPersisted: dispatch(setPersisted())
})

export default connect(mapPropsToState, mapPropsToDispatch)(Home);