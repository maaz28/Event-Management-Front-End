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

class MyEventsContainer extends Component {

  state = {
    data : [],
    noEvents : false
  }

  componentDidMount(){
    // Temporary routes
    get_request(api_base_url + '/event/user-events/' + this.props.uuid)
    .then((res) => {
      console.log(res)
      if(res.responseCode === 500){
        this.setState({
          noEvents : true
        })
      } else {        
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

  deleteHandler = (id) => {
    console.log(id)
  delete_request(api_base_url + '/event/' + id, { owner_id : this.props.uuid } )
  .then((res) => {
    window.location.reload();
    console.log(res);
    // history.push('/my-events')
  })
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
        My Events
      </Typography>
        </div>
  <div class="main"> 
		<div class="wrap">  
			<div class="section group">
    {(this.state.noEvents) ? (
<Typography variant="subtitle2" gutterBottom align = "center">
You don't have any created event <Link to = "/add-event">Create Now</Link>
</Typography>
    ) : (
      <Grid container spacing={24}>
      {
        (this.state.data.map((item, i) => {
          return( 
      <Grid item xs = {12} sm = {6} md = {4} key = {i}>
          <CardView 
          myEvents = {true}
          deleteInterested = {this.deleteInterested}
          details = {item} 
          parentClickHandler = {this.parentClickHandler} 
          editHandler = {this.editHandler}
          deleteHandler = {this.deleteHandler}
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

export default connect(mapStateToProp, mapDispatchToProp)(MyEventsContainer)

