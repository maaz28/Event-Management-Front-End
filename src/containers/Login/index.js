import React, { Component } from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../footer';
 
import LoginContainer from './LoginContainer';


class Login extends Component {



  render() {
    return (
      <div className="App">
      <Navbar/>
      <LoginContainer />
      <Footer/>
      </div>
    );
  }
}

export default Login;
