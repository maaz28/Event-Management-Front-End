import React, { Component } from 'react';
import SignUp from '../../components/Signup';
import history from '../../config/history';
import { api_base_url } from '../../config/api-configuration';
import { connect } from 'react-redux';
import { post_request } from '../../utils/helper';
import { USER_LOGGEDIN } from '../../redux/actions/root.action';


class SignupContainer extends Component {

  state = {
    errorMessage : ''
  }

  SigninHandler = () => {
    history.push('/sign-in');
  }
 
  submitHandler = (data) => {
    console.log(data)
    post_request(api_base_url+"/auth/user-signup", data)
    .then((res) => {
      console.log(res);
      this.props.USER_LOGGEDIN(res.data.result);
      history.push('/'); 
    })
    .catch(err => {
      console.log(err)
      this.setState({
        errorMessage : 'Email Already Exists !'
      })
    })
    //Api Call Here
  }

  render() {
    return (
      <div className="App">
      <SignUp SigninHandler = {this.SigninHandler} submitHandler = {this.submitHandler} errorMessage = {this.state.errorMessage}/>
      </div>
    );
  }
} 


function mapDispatchToProp(dispatch) {
	return ({
		USER_LOGGEDIN : (data) => {
			dispatch(USER_LOGGEDIN(data));
		}
	})
}




export default connect(null, mapDispatchToProp)(SignupContainer)
