import React, { Component } from "react";
import LogIn from "../../shared/styles/LogIn.css";

export default class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            surname: '',
            login: '',
            password: '',
            repeatedPassword: '',
        }
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault()
    }

  render() {
    return (
      <div className="loginComponent" id = 'signUp'>
        <form>
          <input
            className="form"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder=" Imię"
          />

          <input
            className="form"
            type="text"
            value={this.state.surname}
            onChange={e => this.setState({ surname: e.target.value })}
            placeholder=" Nazwisko"
          />

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

          <input
            className="form"
            type="password"
            value={this.state.repeatedPassword}
            onChange={e => this.setState({ repeatedPassword: e.target.value })}
            placeholder=" Powtórz Hasło"
          />

          <button
            id="normalButton"
            className="button"
            onClick={this.handleSubmit}
          >
            Zarejestruj się
          </button>
          <p className ='returnP' onClick = {this.props.registerForm = false}> <span className = 'returnSpan'> Powrót </span> </p>
        </form>
      </div>
    );
  }
}
