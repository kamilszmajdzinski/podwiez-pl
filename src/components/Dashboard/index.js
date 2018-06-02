import React, { Component } from 'react'
import './style.css'
import Header from '../Header'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchInitData } from "../../actions/dataActions";
import { Redirect } from "react-router-dom";
import Footer from '../Footer'
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


                    <div className = 'icons'>
                        <h1 className = 'welcome'>Witaj, miło Cię widzieć!</h1>
                            
                                <i class="fas fa-plus-circle"></i>
                                
                        <i class="fas fa-search"></i>
                        <i class="fas fa-road"></i>
                        <i class="fas fa-user-edit"></i>
                    </div>


                <Footer />
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