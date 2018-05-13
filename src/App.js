import React, { Component } from 'react';
import { Route } from "react-router-dom";
import SignIn from './components/SignIn/index'
import SignUp from './components/SignUp/index'

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </main>
      </div>
    );
  }
}

export default App;
