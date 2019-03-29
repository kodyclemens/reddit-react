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
        <SearchResult />
      </React.Fragment>
    )
  };
};

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(RedditSearch);