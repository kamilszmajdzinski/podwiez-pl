import React, { Component } from 'react'
import './style.css'
import { logoutUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Header extends Component {

    handleLogout = () => {
        this.props.logoutUser();
    }

  render() {
    return (
      <div className = 'header'>
        <i class="fas fa-bars" title= 'Menu'></i>
        <img src = {require('./podwiez2.png')}></img>
        <i class="fas fa-sign-out-alt" title= 'Wyloguj się' onClick = {this.handleLogout} ></i>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        logoutUser
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)