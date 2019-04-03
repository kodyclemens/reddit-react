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
  
  handleFilter = (event) => {
    let buttons = document.querySelectorAll('.filter-btn')
    for (let button of buttons) {
      button.classList = 'filter-btn btn btn-primary'
    }

    event.target.classList = 'filter-btn btn btn-primary active-filter'
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