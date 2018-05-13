import React, { Component } from "react";
import LogIn from "../../shared/styles/LogIn.css";
import FacebookLogin from "react-facebook-login";
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
      registerForm: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.login);
  };

  registerRequest = () => {
    this.setState({ registerForm: true });
    console.log(this.state.registerForm);
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
        {this.state.registerForm ?
        (
            <SignUp />
            
        ):(
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
              <p className="registerPar">
                Nie masz konta?{" "}
                <span className="registerSpan" onClick={this.registerRequest}>
                  Zarejestruj się
                </span>
              </p>
            </form>
          </div>
        )}
       
      </div>
    );
  }
}

export default SignIn;
