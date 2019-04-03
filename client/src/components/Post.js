import React, { PureComponent } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { persistPost, cheerPost } from '../actions/index';

class Post extends PureComponent {

  removeButtons = (post) => {
    const postID = post.id.toString();
    let buttons = document.querySelectorAll('.p' + postID)
    for (let button of buttons) {
      button.remove();
    }
  }

  decideVariant = (likeability) => {
    if (likeability > 85) {
      return 'success'
    }
    else if (likeability < 84 && likeability > 50) {
      return 'warning'
    }
    else {
      return 'danger'
    }
  }

  handlePinClick = (event, post) => {
    this.props.persistPost(post);
    event.target.disabled = true;
    event.target.className = "btn btn-success";
    event.target.innerText = "Pinned to Frontpage"
  }

  handleCheerClick = (event, post) => {
    event.preventDefault();
    const cheerType = event.target.name;
    if (cheerType === undefined) {
      return null;
    }
    this.props.cheerPost(post, cheerType);
    this.removeButtons(post);
  }

  render() {
    const post = this.props.post;
    const persistedPostIDs = this.props.persistedPosts;
    const userLink = "https://old.reddit.com/user/" + post.author;
    const subreddit = post.permalink.split('/')[2]
    // post.permalink is formatted like: /r/subreddit/post_title
    post.link = "https://old.reddit.com" + post.permalink;
    let pinAction = ''
    let cheerAction = <span><Button className={"cheer reddit-btn p" + post.id} onClick={(event) => this.handleCheerClick(event, post)} name="cheer-up">
                <FontAwesomeIcon
                  icon={['fa', 'chevron-circle-up']} 
                  style={{ color: '#fff' }}
                  transform="grow-7"/>
                </Button>
                <Button className={"cheer reddit-btn p" + post.id} onClick={(event) => this.handleCheerClick(event, post)} name="cheer-down">
                  <FontAwesomeIcon
                    icon={['fa', 'chevron-circle-down']} 
                    style={{ color: '#fff' }}
                    transform="grow-7"/>
                </Button></span>;
    let likeability = ''
    let badge = ''


    // If the post ID from the search results matches an already persisted post's ID
    // we do not want to show the pin button (logic for search results feed)

    if (persistedPostIDs.includes(post.id)) {
      post.persisted = true;
    }

    // Changing layout based on if the post is persisted or not

    if (post.persisted !== true ) {
      pinAction = <Button variant="outline-success" onClick={(event) => this.handlePinClick(event, post)}>Pin to Frontpage</Button>;
      cheerAction = '';
    }
    else {
      likeability = ((post.cheers / post.total_votes) * 100).toFixed(0)
      badge = <Badge variant={this.decideVariant(likeability)}>{likeability + "% of users cheered for this post."}</Badge>
    }

    return(
      <div className="container text-center">
      <Card className="mx-auto">
        <Card.Body>
          <Card.Header className="text-left">
            Posted by <a href={userLink}>{post.author}</a> in <a href={post.link} target="_blank" rel="noopener noreferrer">/r/{subreddit}</a>
            <br></br>
            {pinAction}
          </Card.Header>
          <Card.Title className="text-left">{post.title}</Card.Title>
          <Card.Img src={post.image || post.url} />
        </Card.Body>
        {cheerAction}
        {badge}
      </Card>
      <hr></hr>
    </div>
    )
  };
};

const mapDispatchToProps = dispatch => ({
  persistPost: post => dispatch(persistPost(post)),
  cheerPost: (post, type) => dispatch(cheerPost(post, type))
})

export default connect(null, mapDispatchToProps)(Post);