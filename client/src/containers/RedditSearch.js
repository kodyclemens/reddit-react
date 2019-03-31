import React, { PureComponent } from 'react';
import NavBar from '../components/NavBar';
import Posts from '../components/Posts';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';

class RedditSearch extends PureComponent {
  render() {
    return(
      <React.Fragment>
        <NavBar />
        <SearchForm />
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