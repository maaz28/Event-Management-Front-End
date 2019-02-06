import React, { Component } from 'react'
import banner_img from '../../images/map.jpg'
import PageView from './Event-Quick-Page-View';
import {connect} from 'react-redux';

class Banner extends Component {

  
  render() {
    let style = {
        position: "absolute",
        left: "50%",
        top: "100%",
        transform: "translate(-50%, -100%)",
        zIndex: 1000,
        padding: "5px",
        fontWeight: 'bold',
        width : '350px'
    }
    return (
			<div id = "banner">
      <div id = "tag" style = {style}>
      {/* <PageView data = {this.props.event_details}/> */}
      </div>
      <div style = {{maxHeight : '100%', overflow : 'hidden', backgroundImage : 'linear-gradient(darkgray, black)'}}>
			<img src={this.props.event_details.image_url} alt="#" style = {{minHeight : '100%', maxHeight : '100%', maxWidth : '100%', display : 'block', margin : 'auto'}} />
      </div>
		</div> 
    )
  }
}

function mapStateToProp(state) {
  console.log(state.event_reducer)
  return ({
    event_details : state.event_reducer
  })
}


export default connect(mapStateToProp, null)(Banner);