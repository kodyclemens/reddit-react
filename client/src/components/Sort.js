import React from 'react';
import { ButtonToolbar, Button} from 'react-bootstrap';

const Sort = (props) => {
  return(
    <div id="sort-btns">
    <ButtonToolbar>
      <Button href="#" className="sort-btn active-sort" name="recently-pinned" onClick={event => props.handleSort(event)}>Recently Pinned</Button>
      <Button href="#" className="sort-btn" name="most-cheers" onClick={event => props.handleSort(event)}>Most Cheers</Button>
      <Button href="#" className="sort-btn" name="most-votes" onClick={event => props.handleSort(event)}>Most Votes</Button>
    </ButtonToolbar>
    </div>
  )
}

export default Sort;