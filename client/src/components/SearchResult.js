import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { persistPost } from '../actions/index';

class SearchResult extends Component {
  render() {
    const post = this.props.post;
    post.permalink = "https://old.reddit.com" + post.permalink;
    const userLink = "https://old.reddit.com/user/" + post.author;
    return(
      <div className="container text-center">
      <Card>
        <Card.Body>
          <Card.Header className="text-left">
            Posted by <a href={userLink}>{post.author}</a><FontAwesomeIcon icon={['far', 'bookmark']}
            transform="right-5" onClick={(event) => this.props.persistPost(post)} />
          </Card.Header>
          <Card.Title className="text-left">{post.title}</Card.Title>
          <Image src={post.url} rounded fluid />
        </Card.Body>
        <span className="text-center">
          <a href={post.permalink} target="_blank"><FontAwesomeIcon icon={['fab', 'reddit-square']} style={{ color: '#FF4500' }} size="4x" /></a>
        </span>
      </Card>
      <hr></hr>
    </div>
    )
  };
};

const mapDispatchToProps = dispatch => ({
  persistPost: post => dispatch(persistPost(post))
})

export default connect(null, mapDispatchToProps)(SearchResult);