import React, { PureComponent } from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';

class Home extends PureComponent {

  componentDidMount() {
    this.props.dispatch(setPersisted())
  }

  render() {
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

export default connect(mapPropsToState)(Home);