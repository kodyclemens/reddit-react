import React, { PureComponent } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';
import Posts from './Posts';

class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch(setPersisted())
  }

  render() {
    return(
      <React.Fragment>
        <NavBar />
        <Posts posts={this.props.posts} />
      </React.Fragment>
    )
  };
};

const mapPropsToState = state => {
  return {posts: state.posts.persisted}
};

export default connect(mapPropsToState)(Home);