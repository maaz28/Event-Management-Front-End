import React, { Component } from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../footer';
 
import MyEventContainer from './MyEventContainer';


class MyEvent extends Component {



  render() {
    return (
      <div className="App">
      <Navbar/>
      <MyEventContainer />
      <Footer/>
      </div>
    );
  }
}

export default MyEvent;
