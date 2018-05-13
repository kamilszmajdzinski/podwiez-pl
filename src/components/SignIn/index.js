import React, { Component } from "react";
import LogIn from "../../shared/styles/LogIn.css";
import FacebookLogin from "react-facebook-login";
import { Route, Link } from 'react-router-dom'
import SignUp from '../SignUp/index'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
      errorMessage: ''
    };
    
  }

  validateForm = () => {
    if ((this.state.login.length === 0) || (this.state.password.length === 0) ) {
      this.setState({ errorMessage: 'Podaj Dane' })
    }else this.setState({ errorMessage: '' })
  }


  handleSubmit = e => {
    e.preventDefault();
    this.validateForm();
    console.log(this.state.errorMessage);
    
  };

  

  componentClicked = () => {
    console.log("component clicked");
  };

  responseFacebook = response => {
    console.log(response);
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="136761760413821"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          cssClass="button"
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div className="loginContainer">
        <p className="logo"> Podwieź.pl </p>
        
            <div className="loginComponent">
            <form>
              <input
                className="form"
                type="text"
                value={this.state.login}
                onChange={e => this.setState({ login: e.target.value })}
                placeholder=" Login"
              />
  
              <input
                className="form"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                placeholder=" Hasło"
              />
  
              <button
                id="normalButton"
                className="button"
                onClick={this.handleSubmit}
              >
                Zaloguj
              </button>
              {fbContent}
              <p className = 'errorMessage'>{this.state.errorMessage}</p>
              <p className="registerPar">
                Nie masz konta?{" "}
                <Link to="/signup">Zarejestruj się</Link>
              </p>
            </form>
          </div>
       
       
      </div>
    );
  }
}

export default SignIn;
