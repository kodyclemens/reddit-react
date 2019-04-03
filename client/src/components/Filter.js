import React from 'react';
import { ButtonToolbar, Button} from 'react-bootstrap';

const Filter = (props) => {
  return(
    <div>
    <ButtonToolbar>
      <Button href="#" className="filter-btn active-filter" name="recently-voted" onClick={event => props.handleFilter(event)}>Recently Voted</Button>
      <Button href="#" className="filter-btn" name="most-cheers" onClick={event => props.handleFilter(event)}>Most Cheers</Button>
      <Button href="#" className="filter-btn" name="most-votes" onClick={event => props.handleFilter(event)}>Most Votes</Button>
    </ButtonToolbar>
    </div>
  )
}

export default Filter;