import React, { Component } from 'react';
import SignIn from '../SignIn'
import SingUp from '../SignUp'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { sumbitLogin, submitRegister } from "../../actions/userActions";
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
      const { isFetching, isAuth, onSubmitLogin, onSubmitRegister } = this.props
    return (
      <div className = 'landingContainer'>

        <div className = 'logo'>
            
        </div>
        {!isAuth ?
            (<div className = 'authenticationContainer'>
            {!this.state.registerView ? 
                (<SignIn onSubmitLogin = {onSubmitLogin}/>) : 
                (<SingUp onSubmitRegister = {onSubmitRegister}/>)
            }
            {!this.state.registerView ? 
                (<p onClick = {this.handleViewChange}>Nie masz konta? <span className = 'link'>Zarejestruj się</span></p>):
                (<p onClick = {this.handleViewChange}> <span className = 'link'>Powrót</span></p>)
            }
            </div>):(
                <Redirect to ='/dashboard' />
            )
        }
        <p className = 'version'>v0.0.3</p>
      </div>
    )
  }
}


 const mapStateToProps = ({ user }) => {
    return {
        isFetching: user.isFetching,
        isAuth: user.isAuth
    }
}

 const mapDispatchToProps = dispatch => {
     return {
         onSubmitLogin : encoded =>{
             dispatch(sumbitLogin(encoded))
         },
         onSubmitRegister : body =>{
             dispatch(submitRegister(body))
         }
     } 
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Landing)