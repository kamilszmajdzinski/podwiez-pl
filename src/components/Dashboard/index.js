import React, { Component } from 'react'
import './style.css'
import Header from '../Header'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchInitData } from "../../actions/dataActions";
import { Redirect } from "react-router-dom";
import Notifications from '../Notifications'

class Dashboard extends Component {

    componentDidMount() {
       this.props.fetchInitData()
    }
    

  render() {
      const { isAuth } = this.props
    return (
        <div>
        {!isAuth ? 
        (
            <Redirect to = '/'/>
        ):(
                <div className = 'dashboard'>
                <Header />
                <h1 className = 'welcome'>Witaj, miło Cię widzieć!</h1>
                <Notifications />
                </div>
            )
        }
        </div>
      
        
      
    )
  }
}

export const mapStateToProps = ({ user }) => {
    return {
        isAuth: user.isAuth
    }
}

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchInitData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)