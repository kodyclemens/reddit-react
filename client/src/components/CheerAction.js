import React from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheerAction = (props) => {
  return(
    <span>
      <Button className={"cheer cheer-btn p" + props.post.id} onClick={(event) => props.handleCheerClick(event, props.post)} name="cheer-up">
      <FontAwesomeIcon
          icon={['fa', 'chevron-circle-up']} 
          style={{ color: '#99fc80' }}
          transform="grow-7"
          className="fontawesome" />
        </Button>
      <Button className={"cheer cheer-btn p" + props.post.id} onClick={(event) => props.handleCheerClick(event, props.post)} name="cheer-down">
        <FontAwesomeIcon
          icon={['fa', 'chevron-circle-down']} 
          style={{ color: '#fc8b80' }}
          transform="grow-7"
          aria-hidden="true"
          className="fontawesome" />
      </Button>
    </span>
  )
}

export default CheerAction;