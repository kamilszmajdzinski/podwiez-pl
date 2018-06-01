import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { hashSync, genSaltSync, getSalt } from "bcryptjs";


export default class SignUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            repeatedPassword: '',
        }
    }


    //TODO : add data validation

    handleSubmit = (e) => {
        const { email, password } = this.state
        e.preventDefault()
        console.log('hasło przed hashowaniem: ', password)
        var salt = genSaltSync(12);
        var hash = hashSync(password, salt);  
        var saltt = getSalt()

        const body = {
          email,
          password: hash
        }
        console.log('hasło po hashoawniu: ', body.password)
        console.log(body)
        this.props.onSubmitRegister(body)
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
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder=" Email"
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
