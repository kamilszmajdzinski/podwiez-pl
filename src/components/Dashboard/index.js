import React, { Component } from 'react'
import './style.css'
import Header from '../Header'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchInitData } from "../../actions/dataActions";

class Dashboard extends Component {

    componentDidMount() {
       console.log('cdm')
       this.props.fetchInitData()
    }
    

  render() {
    return (
      <div className = 'dashboard'>
        <Header />
        <h1 className = 'welcome'>Witaj, miło Cię widzieć!</h1>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchInitData
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Dashboard)