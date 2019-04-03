import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';
import Posts from './Posts';
import Filter from '../components/Filter';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      filter: 'recently-voted'
    }
  }

  componentDidMount() {
    this.props.dispatch(setPersisted())
  }
  
  handleFilter = (event) => {
    this.setState({
      filter: event.target.name
    })
    // Setting state is asynchronous!! Do not dispatch with state.filter, it will not be updated before the dispatch is executed!
    this.props.dispatch(setPersisted(event.target.name))
  }

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