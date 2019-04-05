import React, { PureComponent } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';
import Posts from './Posts';
import Sort from '../components/Sort';

class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch(setPersisted())
  }
  
  handleSort = (event) => {
    let buttons = document.querySelectorAll('.sort-btn')
    for (let button of buttons) {
      button.classList = 'sort-btn btn btn-primary'
    }

    event.target.classList = 'sort-btn btn btn-primary active-sort'
    this.props.dispatch(setPersisted(event.target.name))
  }

  render() {
    return(
      <>
        <NavBar />
        <Sort handleSort={this.handleSort} />
        <Posts posts={this.props.posts} />
      </>
    )
  };
};

const mapPropsToState = state => {
  return {posts: state.posts.persisted}
};

export default connect(mapPropsToState)(Home);