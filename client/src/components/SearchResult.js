import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchResult = (props) => {
  const post = props.post;
  post.permalink = "https://old.reddit.com" + post.permalink;
  const userLink = "https://old.reddit.com/user/" + post.author;
  return (
    <div className="container text-center">
      <Card>
        <Card.Body>
          <Card.Header className="text-left">
            Posted by <a href={userLink}>{post.author}</a><FontAwesomeIcon icon={['far', 'bookmark']}
            transform="right-5" onClick={(event) => props.handleClick(event, post)} />
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
  );
};

export default SearchResult;