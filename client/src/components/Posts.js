import React, { PureComponent } from 'react';
import {TailSpin} from '@bit/mhnpd.react-loader-spinner.tail-spin';
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
          <TailSpin 
            color={'#A384E7'} 
            height={75} 
            width={75} 
          />
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