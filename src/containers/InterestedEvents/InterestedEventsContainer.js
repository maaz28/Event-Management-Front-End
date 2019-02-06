
import React, { Component } from 'react';
import CardView from '../../components/shared/card'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import { get_request, delete_request, put_request, post_request } from '../../utils/helper';
import { api_base_url } from '../../config/api-configuration';
import { DETAILS_OF_EVENT } from '../../redux/actions/event-actions';
import Typography from '@material-ui/core/Typography';
import history from '../../config/history';
import {Link} from 'react-router-dom';


class InterestedEventsContainer extends Component {

  state = {
    data : [],
    noEvents : false
  }

    componentDidMount(){
    get_request(api_base_url + '/event/interested-event/' + this.props.uuid)
    .then((res) => {
      console.log(res)
      if(res.data.results.length === 0){
        this.setState({
          noEvents : true
        })
      } 
      else {        
        this.setState({
          data : res.data.results  
        })
      }
    })
  }

  parentClickHandler = (data) => {
    this.props.detailsOfEvent(data);
    history.push('/event-details');
  }
  
  editHandler = (id) => {
    var result = this.state.data.find(obj => {
      return obj._id === id
    })
    let obj = result;
    obj.edit = true;
    this.props.detailsOfEvent(obj);
    history.push('/edit-event')
  }

  deleteInterested = (id) => {
    let obj = {
      userId : this.props.uuid,
      eventId : id
    }
    delete_request(api_base_url + '/event/reject-invitation', obj)
    .then((res) => {console.log(res)})
  }

  inviteHandler = (event_id) => {
    console.log(event_id)
  }

  interestCLickHandler = ( event_id ) => {
   let that = this;
   return(
    new Promise(function(resolve, reject) {
      let obj = {
        eventId : event_id,
        userId : that.props.uuid
      } 
      console.log(obj)
      post_request(api_base_url + "/event/interested-event", obj)
      .then((res) => {
        console.log(res)
        resolve(200)
      })
      .catch(err => reject(err))  
    }
   )
  )  
  }

  render() {
    return (
        <React.Fragment>
        <div style = {{margin : '16px'}}>
        <Typography variant="h4" gutterBottom align = "center">
        Interested Events
      </Typography>
        </div>
  <div class="main"> 
		<div class="wrap"> 
			<div class="section group">
    {(this.state.noEvents) ? (
<Typography variant="subtitle2" gutterBottom align = "center">
You have not shown interest in any event yet lets <Link to = "/all-events">explore </Link>all events
</Typography>
    ) : (
      <Grid container spacing={24}>
      {
        (this.state.data.map((item, i) => {
          return( 
      <Grid item = {i} xs = {12} sm = {6} md = {4} key = {i}>
          <CardView 
          interested = {true}
          deleteInterested = {this.deleteInterested}
          details = {item}  
          parentClickHandler = {this.parentClickHandler} 
          interested = {true}
          login = {this.props.login}
          inviteHandler = {this.inviteHandler}
          interestCLickHandler = {this.interestCLickHandler}
          />
          </Grid>  
          )
        }))
      }
      </Grid>
    )}
			</div>
		</div>
	</div>
    </React.Fragment>
    )
  }
}

function mapStateToProp(state) {
  return ({
      uuid : state.user_reducer.uuid,
      login : state.user_reducer.is_login
  })
}

function mapDispatchToProp(dispatch) {
	return ({
		detailsOfEvent : (data) => {
			dispatch(DETAILS_OF_EVENT(data));
		}
	})
}

export default connect(mapStateToProp, mapDispatchToProp)(InterestedEventsContainer)

