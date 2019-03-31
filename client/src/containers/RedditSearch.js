import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import NavBar from '../components/NavBar';
import Posts from '../components/Posts';
import { connect } from 'react-redux';

class RedditSearch extends Component {
  render() {
    return(
      <React.Fragment>
        <NavBar />
        <SearchInput />
        <Posts loading={this.props.status.loading} posts={this.props.posts} />
      </React.Fragment>
    )
  };
};

const mapStateToProps = state => ({
  status: {loading: state.posts.loading},
  posts: state.posts.posts
})

export default connect(mapStateToProps)(RedditSearch);