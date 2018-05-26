import React, { Component } from 'react';
import SignIn from '../SignIn'
import SingUp from '../SignUp'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sumbitLogin } from "../../actions/userActions";
import "./style.css";



class Landing extends Component {

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
      const { isFetching, onSubmitLogin } = this.props
    return (
      <div className = 'landingContainer'>
        <div className = 'authenticationContainer'>
        {!this.state.registerView ? 
            (<SignIn onSubmitLogin = {onSubmitLogin}/>) : 
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


 const mapStateToProps = ({ user }) => {
    return {
        isFetching: user.isFetching
    }
}

 const mapDispatchToProps = dispatch => {
     return {
         onSubmitLogin : encoded =>{
             dispatch(sumbitLogin(encoded))
         }
     } 
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Landing)