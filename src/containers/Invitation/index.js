import React, { Component } from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../footer';
 
import InviteRequestsContainer from './InviteRequestsContainer';


class InviteRequests extends Component {



  render() {
    return (
      <div className="App">
      <Navbar/>
      <InviteRequestsContainer />
      <Footer/>
      </div>
    );
  }
}

export default InviteRequests;
