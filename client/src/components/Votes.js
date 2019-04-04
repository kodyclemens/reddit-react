import React from 'react';
import {Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Votes = (props) => {
  return(
    <span>
      <Badge className="votes" id="votes" variant="light">{props.votes}</Badge>
      <FontAwesomeIcon
        icon={['fa', 'user-secret']} 
        size='sm'
        className ="vote-image"
        color="#343a40" />
    </span>
  )
}

export default Votes;