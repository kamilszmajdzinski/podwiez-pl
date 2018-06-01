import React, { Component } from 'react';
import { Route } from "react-router-dom";
import SignIn from './components/SignIn/index'
import SignUp from './components/SignUp/index'
import Landing from './components/Landing';
import Dashboard from './components/Dashboard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
       </MuiThemeProvider>
    );
  }
}

export default App;
