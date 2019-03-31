import React, { Component } from 'react';
import {TailSpin} from '@bit/mhnpd.react-loader-spinner.tail-spin';
import Post from './Post';

class Posts extends Component {

  render() {
    let results = [];
    if (this.props.posts !== undefined) {
      results = this.props.posts.map((post, id) => {return <Post key={id} post={post} handleClick={this.handleClick} />})
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
          {results}
        </div>
      )
    }
  }
};

export default Posts;