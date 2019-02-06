import React, { Component } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import SingleContainer from './SingleContainer';

class SingleEvent extends Component {
  render() {
    return (
      <div className="SingleEvent">
      <Navbar/>
      <SingleContainer/> 
      <Footer/>
      </div>
    );
  }
}

export default SingleEvent;
