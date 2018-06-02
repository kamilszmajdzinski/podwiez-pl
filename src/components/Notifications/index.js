import React, { Component } from 'react'
import { connect } from "react-redux";
import Snackbar from 'material-ui/Snackbar';

const mapStateToProps = ({ notifications }) =>{
    return{
        show: notifications.show,
        text: notifications.text
    }
}


const Notifications = ({ show, text }) => {
    return(
        <Snackbar 
            open = {show}
            message = {text}
        />
    )
}

export default connect(mapStateToProps)(Notifications)