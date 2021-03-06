import React, { Component } from 'react'
import './style.css'
import Header from '../Header'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchInitData } from "../../actions/dataActions";
import { Redirect } from "react-router-dom";
import AppFooter from '../AppFooter'
import Notifications from '../Notifications'

class Dashboard extends Component {

    componentDidMount() {
       const { credentials, fetchInitData } = this.props
        credentials && fetchInitData(credentials)
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


                    <div className = 'icons'>
                        <h1 className = 'welcome'>Witaj, miło Cię widzieć!</h1>
                            
                                <i class="fas fa-plus-circle"></i>
                                
                        <i class="fas fa-search"></i>
                        <i class="fas fa-road"></i>
                        <i class="fas fa-user-edit"></i>
                    </div>


                <AppFooter />
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
        isAuth: user.isAuth,
        credentials: user.credentials
    }
}

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchInitData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)