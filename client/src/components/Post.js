import React, { PureComponent } from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { persistPost } from '../actions/index';

class Post extends PureComponent {

  handleClick = (event, post)=> {
    this.props.persistPost(post);
    event.target.disabled = true;
    event.target.className = "btn btn-success";
    event.target.innerText = "Pinned to Frontpage"
  }

  render() {
    const post = this.props.post;
    const persistedPostIDs = this.props.persistedPosts;
    const userLink = "https://old.reddit.com/user/" + post.author;
    post.perma_link = "https://old.reddit.com" + post.perma_link;
    let pinAction = ''

    // If the post ID from the search results matches an already persisted post's ID
    // we do not want to show the pin button (logic for search results feed)
    if (persistedPostIDs.includes(post.id)) {
      post.persisted = true;
    }

    // Do not show the pin button if the post has already been persisted to the DB
    // Each persisted post has a 'persisted' property set to true
    // This is done in the posts_reducer when SET_PERSISTED is called
    if (post.persisted !== true ) {
      pinAction = <Button variant="outline-success" onClick={(event) => this.handleClick(event, post)}>Pin to Frontpage</Button>
    }

    return(
      <div className="container text-center">
      <Card>
        <Card.Body>
          <Card.Header className="text-left">
            Posted by <a href={userLink}>{post.author}</a>
            <br></br>
            {pinAction}
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