import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ListView from '../../components/shared/ListView';
import { get_request, post_request, delete_request } from '../../utils/helper';
import { api_base_url } from '../../config/api-configuration';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';


class InviteRequestsContainer extends Component {

state = {
  data : [
  ]
}

componentDidMount () {

  console.log("works")
  get_request(api_base_url + '/event/invitation/' + this.props.uuid)
  .then((res) => {
    this.setState({
      data : res.data.results 
    })
    console.log(res);
  })
  .catch(err => {console.log(err)})
}

acceptHandler = (id) => {
  let obj = {
    userId : this.props.uuid,
    eventId : id
  }
  console.log(id);
  post_request(api_base_url + '/event/accept-invitation/', obj)
  .then((res) => {
    console.log(res);
    var result = this.state.data.filter((obj, i) => {
      if(obj._id === id){
        return i
      }
      return 1
    })
    let arr = this.state.data;
    arr.splice(result, 1);
    // this.state.data.splice()
    this.setState({
      data : arr
    })
  })
}

ignoreHandler = (id) => {
  let obj = {
    userId : this.props.uuid,
    eventId : id
  }
  delete_request(api_base_url + '/event/reject-invitation', obj)
  .then((res) => {
    console.log(res)
    var result = this.state.data.filter((obj, i) => {
      console.log(i)
      if(obj._id === id){
        return i
      }
    })
    let arr = this.state.data;
    arr.splice(result, 1);
    this.setState({
      data : arr
    })
  })
}

  render() {
    return (
      <React.Fragment>
      <div style = {{margin : '16px'}}>
      <Typography variant="h4" gutterBottom align = "center">
      Invitations
    </Typography>
      </div>
  <div class="main"> 
		<div class="wrap">  
			<div class="section group">
                {
                  (this.state.data.length === 0) ? (
                    <Typography variant="subtitle2" gutterBottom align = "center">
                    No invitation to show right now
                    </Typography>
                  ) : (
                    <Paper elevation = {2}>
                    <ListView 
                    data = {this.state.data}
                    ignoreHandler = {this.ignoreHandler}
                    acceptHandler = {this.acceptHandler}
                    />
                </Paper>
                  )
                }
      </div>
      </div>      
      </div>
      </React.Fragment>
    );
  }
}

function mapStateToProp(state) {
  console.log(state.user_reducer.is_login)
  return ({
    uuid : state.user_reducer.uuid
  })
}

export default connect(mapStateToProp, null)(InviteRequestsContainer);
