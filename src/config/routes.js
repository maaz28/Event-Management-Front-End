import React from 'react';
import {
  Router,
  Route,
  HashRouter,
  Redirect 
} from 'react-router-dom';
import history from './history';
import App from '../App'
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import SingleEvent from '../containers/Single-event-page.js';
import AddEvent from '../containers/Add-Event';
import InviteRequests from '../containers/Invitation';
import MyEvent from '../containers/MyEvent';
import EditEvent from '../containers/Add-Event/Edit-Event';
import interestedEvents from '../containers/InterestedEvents'
import AllEvents from '../containers/AllEvents';
import {connect} from 'react-redux';

const Routing = (props) => {
  return (
    <HashRouter>
      <Structure login = {props.login}/>
    </HashRouter>
  )
}

const Structure = (props) => {
  return(
  <Main login = {props.login}/>
  )
}

const Main = (props) => {
  console.log(props.login)
  return (
    <Router history={history}>
    <React.Fragment>
      <div>
    {
      (props.login) ? (
    <React.Fragment>
      <Route  path = '/edit-event' component={EditEvent}/>
      <Route  path = '/my-events' component={MyEvent}/>
      <Route  path = '/invite-requests' component={InviteRequests}/>
      <Route path = '/interested-events' component = {interestedEvents}/>
    </React.Fragment>
      ) : (
        <Redirect to="/"/>
      )
    }
        </div>
      <div>
      <Route exact path = '/' component={App}/>
      <Route  path = '/sign-in' component={Login}/>
      <Route  path = '/sign-up' component={Signup}/> 
      <Route path = '/all-events' component = {AllEvents}/>
      <Route  path = '/event-details' component={SingleEvent}/>
      <Route  path = '/add-event' component={AddEvent}/>
       </div>
    </React.Fragment>
    </Router> 
  )
}

function mapStateToProp(state) {
  console.log(state.user_reducer.is_login)
  return ({
    login : state.user_reducer.is_login
  })
}

export default connect(mapStateToProp, null)(Routing);