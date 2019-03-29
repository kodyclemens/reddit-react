import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SearchResult = (props) => {
  const post = props.post
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          <img src={post.thumbnail} alt=''></img>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default SearchResult;