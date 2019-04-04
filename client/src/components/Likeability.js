import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Likeability = (props) => {
  let color;
  let likeability = props.likeability;
  if (likeability === 'smile') {
    color = '#99fc80';
  }
  else if (likeability === 'meh') {
    color='#fdcb6e';
  }
  else {
    color='#fc8b80';
  }

  return(
    <span>
        <FontAwesomeIcon
          icon={['fa', `${likeability}`]} 
          size='2x'
          color={color}
          />
    </span>
  )
}

export default Likeability;