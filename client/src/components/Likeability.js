import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Likeability = (props) => {
  // debugger;
  return(
    <span>
        <FontAwesomeIcon
          icon={['far', `${props.likeability}`]} 
          size='2x'
          />
    </span>
  )
}

export default Likeability;