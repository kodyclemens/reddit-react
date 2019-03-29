import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import NavBar from '../components/NavBar';
import SearchResults from '../components/SearchResults';
import { connect } from 'react-redux';

class RedditSearch extends Component {
  render() {
    return(
      <React.Fragment>
        <NavBar />
        <SearchInput />
        <SearchResults loading={this.props.status.loading} posts={this.props.posts} />
        <p><i class="fa-candy-cane"></i></p>
        <i class="fas fa-thumbtack"></i>
      </React.Fragment>
    )
  };
};

const mapStateToProps = state => ({
  status: {loading: state.posts.loading},
  posts: state.posts.posts
})

export default connect(mapStateToProps)(RedditSearch);