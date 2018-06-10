import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAccountData } from "../../actions/dataActions";

class MyAccount extends Component {

componentDidMount() {
    const { fetchAccountData, credentials } = this.props
    credentials && fetchAccountData(credentials)
}


  render() {
    return (
      <div>
        <p> my MyAccount</p> 
      </div>
    )
  }
}


const mapStateToProps = ({ user }) => {
    return{
        credentials: user.credentials
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchAccountData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)