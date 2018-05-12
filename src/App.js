import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn  from "./components/SignIn/index";

class App extends Component {
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default App;
