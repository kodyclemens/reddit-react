import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import NavBar from '../components/NavBar';
import SearchResult from '../components/SearchResults';
import { connect } from 'react-redux';

class RedditSearch extends Component {
  render() {
    return(
      <React.Fragment>
        <NavBar />
        <SearchInput />
        <SearchResult loading={this.props.status.loading} />
      </React.Fragment>
    )
  };
};

const mapStateToProps = state => ({
  status: {loading: state.posts.loading}
})

export default connect(mapStateToProps)(RedditSearch);