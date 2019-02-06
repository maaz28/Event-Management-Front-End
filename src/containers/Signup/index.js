import React, { Component } from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../footer';
 
import SignupContainer from './SignupContainer';
import history from '../../config/history'

class Signup extends Component {

  signupHandler = () => {
    history.push('/sign-up');
  }

  render() {
    return (
      <div className="App">
      <Navbar/>
      <SignupContainer signupHandler = {this.signupHandler}/>
      <Footer/>
      </div>
    );
  }
}

export default Signup;
