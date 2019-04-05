import React, { PureComponent } from 'react';
import {LoadingSpinner} from '../components/Loading';
import Post from '../components/Post';
import { connect } from 'react-redux';
import { setPersisted } from '../actions/index';

class Posts extends PureComponent {

  
  componentDidMount() {
    // User could come directly to the search page, bypassing the setPersisted on the homepage, resulting in pin buttons for already persisted posts.
    // Prevent unnescessary DB queries if persisted posts are already present    

    if (this.props.persistedPostIDs.length <= 0) {
      this.props.dispatch(setPersisted());
      }
    }
    
    render() {
      let renderPosts = [];
      if (this.props.posts !== undefined) {
        renderPosts = this.props.posts.map((post, id) => {return <Post key={id} post={post} persistedPosts={this.props.persistedPostIDs} />})
      }

      if (this.props.loading === true) {
        return (
          <div className="text-center">
            {LoadingSpinner()}
          </div>
        )
      }
      else {
        return (
          <div>
            {renderPosts}
          </div>
        )
      }
  }
};

const mapStateToProps = state => {
  if (state.posts.persisted) {
    const persistedPosts = state.posts.persisted;
    let persistedPostIDs = [];
    for(let i in persistedPosts) {
      persistedPostIDs.push(persistedPosts[i].post_id)
    };
    return {persistedPostIDs: persistedPostIDs}
  };
  return {persistedPostIDs: []}
}

export default connect(mapStateToProps)(Posts);