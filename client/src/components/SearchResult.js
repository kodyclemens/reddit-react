import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const SearchResult = (props) => {
  const post = props.post;
  post.permalink = "https://old.reddit.com" + post.permalink;
  const userLink = "https://old.reddit.com/user/" + post.author;
  return (
    <div className="container text-center">
      <Card>
        <Card.Body>
          <Card.Header className="text-left">Posted by <a href={userLink}>{post.author}</a></Card.Header>
          <Card.Title className="text-left">{post.title}</Card.Title>
          <Card.Text className="text-left">
            {post.selftext}
          </Card.Text>
          <img src={post.thumbnail} alt=''></img>
        </Card.Body>
      </Card>
      <hr></hr>
    </div>
  );
};

export default SearchResult;