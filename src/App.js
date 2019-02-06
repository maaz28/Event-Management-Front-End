import React, { Component } from 'react';
import Navbar from './containers/navbar';
import Footer from './containers/footer';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Home/> 
      <Footer/>
      </div>
    );
  }
}

export default App;
