import React, { PureComponent } from 'react';
import {LoadingSpinner} from './Loading';
import Post from './Post';

class Posts extends PureComponent {

  render() {
    let renderPosts = [];
    if (this.props.posts !== undefined) {
      renderPosts = this.props.posts.map((post, id) => {return <Post key={id} post={post} handleClick={this.handleClick} />})
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

export default Posts;