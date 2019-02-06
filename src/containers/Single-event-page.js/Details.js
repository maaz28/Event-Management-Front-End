import React, { Component } from 'react';
import Banner from './Banner';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import MediaControlCard from '../../components/shared/detailedCardView'

class Details extends Component {
  render() {
      const {event_details} = this.props;
    return (
    <div class="main">
		<div class="wrap">
			<div class="section group">
    <MediaControlCard details = {event_details}/>
    {/* <Divider/> */}
            <Paper style = {{padding : '16px', marginTop : '16px'}}>
            <Typography component="h5" variant="h5">
            Details
          </Typography>
          <br/>
          <Typography variant="subtitle1">
            {event_details.short_description}
          </Typography>
          <br/>
          <Typography variant="subtitle1">
          {event_details.detail_description}
          </Typography>
          <br/>
          <Typography variant="subtitle2">
           {event_details.tickets}
          </Typography>
          <br/>
          <Typography variant="subtitle2">
          <a href = {event_details.website_link}> {event_details.website_link} </a> 
          </Typography>
            </Paper>
            </div>
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
  
  
  export default connect(mapStateToProp, null)(Details);
