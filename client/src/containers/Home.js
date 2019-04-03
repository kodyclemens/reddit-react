import React, { PureComponent } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';
import Posts from './Posts';
import Filter from '../components/Filter';

class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch(setPersisted())
  }

  // handleFilter = (
  //   event = {
  //     target: {
  //       name: 'recently-voted'
  //     }
  //   }) => {return event.target.name;}

  // TODO: Filter - Pass the event target name to the setPersisted action...
  // OPTION 1. Adjust API URL based on input and setup different API endpoints based on selected filter
  // OPTION 2. Do the filtering via JS, reducing DB queries

  render() {
    return(
      <>
        <NavBar />
        <Filter handleFilter={this.handleFilter} />
        <Posts posts={this.props.posts} />
      </>
    )
  };
};

const mapPropsToState = state => {
  return {posts: state.posts.persisted}
};

export default connect(mapPropsToState)(Home);