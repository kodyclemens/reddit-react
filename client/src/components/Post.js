import React, { PureComponent } from 'react';
import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { persistPost } from '../actions/index';

class Post extends PureComponent {
  render() {
    const post = this.props.post;
    const userLink = "https://old.reddit.com/user/" + post.author;
    post.perma_link = "https://old.reddit.com" + post.perma_link;
    let pinAction = ''

    // Do not show the bookmark visual if the post has already been persisted to the DB
    if (post.persisted !== true) {
      pinAction = <FontAwesomeIcon icon={['far', 'bookmark']}
      transform="right-5" onClick={(event) => this.props.persistPost(post)} />
    }

    return(
      <div className="container text-center">
      <Card>
        <Card.Body>
          <Card.Header className="text-left">
            Posted by <a href={userLink}>{post.author}</a>{pinAction}
          </Card.Header>
          <Card.Title className="text-left">{post.title}</Card.Title>
          <Image src={post.image || post.url} rounded fluid />
        </Card.Body>
        <span className="text-center">
          <a href={post.permalink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'reddit-square']} style={{ color: '#FF4500' }} size="4x" /></a>
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

export default connect(null, mapDispatchToProps)(Post);