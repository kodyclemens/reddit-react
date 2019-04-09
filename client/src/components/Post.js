import React, { PureComponent } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { persistPost, cheerPost } from '../actions/index';
import CheerAction from './CheerAction';
import Votes from './Votes';
import Likeability from './Likeability';

class Post extends PureComponent {

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

  removeButtons = (post) => {
    const postID = post.id.toString();
    let buttons = document.querySelectorAll('.p' + postID)
    for (let button of buttons) {
      button.remove();
    }
  }

  decideVariant = (likeability) => {
    if (likeability > 85) {
      return 'smile'
    }
    else if (likeability < 84 && likeability > 50) {
      return 'meh'
    }
    else {
      return 'frown-open'
    }
  }

  render() {
    /* ---Variable Declartions START--- */
    const post = this.props.post;
    const persistedPostIDs = this.props.persistedPosts;
    const userLink = "https://old.reddit.com/user/" + post.author;
    const subreddit = post.permalink.split('/')[2]

    // post.permalink is formatted like: /r/subreddit/post_title
    post.link = "https://old.reddit.com" + post.permalink;
    let pinAction;
    let cheerAction;
    let likeability;
    let ratingSmiley;
    let percentageText;
    let votes;
    /* ---Variable Declartions END--- */


    // If the post ID from the search results matches an already persisted post's ID
    // we do not want to show the pin button (logic for search results feed)
    if (persistedPostIDs.includes(post.id)) {
      post.persisted = true;
    }

    // Changing layout based on if the post is persisted or not
    if (post.persisted !== true) {
      pinAction = <Button variant="outline-success" onClick={(event) => this.handlePinClick(event, post)}>Pin to Frontpage</Button>;
    }
    // Prevent posts in search results that are already pinned from showing the userRating
    // These search result posts will not have cheers or total_votes, so the rating will not display a correct percentage
    else if (post.total_votes) {
      likeability = ((post.cheers / post.total_votes) * 100).toFixed(0)
      ratingSmiley = <Likeability likeability={this.decideVariant(likeability)} />
      percentageText = <figcaption className="figure-caption">{likeability + "% of users cheered for this post."}</figcaption>
      votes = <Votes votes={post.total_votes} />
      cheerAction = <CheerAction post={post} handleCheerClick={this.handleCheerClick} />;
    }

    return(
      <div className="container text-center">
      <Card className="mx-auto">
        <Card.Body>
          <Card.Header className="text-left card-links">
            Posted by <a href={userLink} target="_blank" rel="noopener noreferrer">{post.author}</a> in <a href={post.link} target="_blank" rel="noopener noreferrer">/r/{subreddit}</a>
            {/* {votes} */}
            <br></br>
            {pinAction}
          </Card.Header>
          <Card.Title className="text-left card-titles">{post.title}</Card.Title>
          <Card.Img src={post.image || post.url} />
        </Card.Body>
        {cheerAction}
        {ratingSmiley}{percentageText}
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