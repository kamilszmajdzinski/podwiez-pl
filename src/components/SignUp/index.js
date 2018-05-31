import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { hash } from "bcrypt";


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


    //TODO : add data validation

    handleSubmit = (e) => {
        const { email, password } = this.state
        e.preventDefault()

        hash(password, 12, function(err, hash) {
          console.log(hash)
        });
    }

  render() {
    return (
      <div className="loginContainer">
        <div className = 'logoImg'>
          </div>
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
          
        </form>
      </div>
      </div>
    );
  }
}
