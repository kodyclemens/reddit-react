import React from 'react';
import {Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Votes = (props) => {
  return(
    <span>
        <FontAwesomeIcon
          icon={['fa', 'globe-americas']} 
          size='lg'
          className ="votes" />
        <Badge className="votes" id="votes" variant="light">{props.votes}</Badge>
    </span>
  )
}

export default Votes;