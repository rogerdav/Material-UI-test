import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './header';
import SignIn from './signin';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SimpleAppBar />
      <SignIn />
      </div>
    );
  }
}

export default App;
