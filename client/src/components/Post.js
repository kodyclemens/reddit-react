import React, { PureComponent } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { persistPost, cheerPost } from '../actions/index';
import CheerAction from './CheerAction';
import Votes from './Votes';

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
    /* ---Variable Declartions START--- */
    const post = this.props.post;
    const persistedPostIDs = this.props.persistedPosts;
    const userLink = "https://old.reddit.com/user/" + post.author;
    const subreddit = post.permalink.split('/')[2]

    // post.permalink is formatted like: /r/subreddit/post_title
    post.link = "https://old.reddit.com" + post.permalink;
    let pinAction = '';
    let cheerAction = <CheerAction post={post} handleCheerClick={this.handleCheerClick} />
    let likeability = '';
    let badge = '';
    let votes = '';
    /* ---Variable Declartions END--- */


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
    // Prevent posts in search results that are already pinned from showing the badge
    // These search result posts will not have cheers or total_votes, so the badge will not display a correct percentage
    else if (post.total_votes) {
      likeability = ((post.cheers / post.total_votes) * 100).toFixed(0)
      badge = <Badge className="likeability-badge" variant={this.decideVariant(likeability)}>{likeability + "% of users cheered for this post."}</Badge>
      votes = <Votes votes={post.total_votes} />
    }

    return(
      <div className="container text-center">
      <Card className="mx-auto">
        <Card.Body>
          <Card.Header className="text-left">
            Posted by <a href={userLink}>{post.author}</a> in <a href={post.link} target="_blank" rel="noopener noreferrer">/r/{subreddit}</a>{votes}
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