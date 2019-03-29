import React, { Component } from 'react';
import {TailSpin} from '@bit/mhnpd.react-loader-spinner.tail-spin';

class SearchResult extends Component {
  render() {
    if (this.props.loading === true) {
      return (
        <TailSpin 
          color={'#A384E7'} 
          height={75} 
          width={75} 
        />
      )
    }
    else {
      return (
        <p>Not loading!</p>
      )
    }
  }
};

export default SearchResult;