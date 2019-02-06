import React, { Component } from 'react';
import Banner from './Banner';
import Details from './Details';

class SingleContainer extends Component {
  render() {
    return (
		<div>
        <Banner/>
        <Details/>
	  </div>
    )
  }
}

export default SingleContainer
