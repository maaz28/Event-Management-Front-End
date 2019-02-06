import React, { Component } from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../footer';
 
import InterestedEventsContainer from './InterestedEventsContainer';


class InterestedEvents extends Component {



  render() {
    return (
      <div className="App">
      <Navbar/>
      <InterestedEventsContainer />
      <Footer/>
      </div>
    );
  }
}

export default InterestedEvents;
