import React, { Component } from 'react';
import SignIn from '../SignIn'
import SingUp from '../SignUp'
import "./style.css";


export default class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            registerView: false
        }
        
    }

    handleViewChange = () => {
        this.setState({
            registerView: !this.state.registerView
        })
    }

  render() {
    return (
      <div className = 'landingContainer'>
        <div className = 'authenticationContainer'>
        {!this.state.registerView ? 
            (<SignIn />) : 
            (<SingUp />)
        }
        {!this.state.registerView ? 
            (<p onClick = {this.handleViewChange}>Nie masz konta? Zaloguj się</p>):
            (<p onClick = {this.handleViewChange}>Powrót</p>)
        }
        </div>
      </div>
    )
  }
}
