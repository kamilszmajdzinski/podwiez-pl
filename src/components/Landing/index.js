import React, { Component } from 'react';
import SignIn from '../SignIn'
import SingUp from '../SignUp'
import { connect } from "react-redux";
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
      const { isFetching, onSubmitLogin, onSubmitRegister } = this.props
    return (
      <div className = 'landingContainer'>

        <div className = 'logo'>
            
        </div>

        <div className = 'authenticationContainer'>
        {!this.state.registerView ? 
            (<SignIn onSubmitLogin = {onSubmitLogin}/>) : 
            (<SingUp onSubmitRegister = {onSubmitRegister}/>)
        }
        {!this.state.registerView ? 
            (<p onClick = {this.handleViewChange}>Nie masz konta? <span className = 'link'>Zaloguj się</span></p>):
            (<p onClick = {this.handleViewChange}> <span className = 'link'>Powrót</span></p>)
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
         },
         onSubmitRegister : body =>{
             dispatch(submitRegister(body))
         }
     } 
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Landing)