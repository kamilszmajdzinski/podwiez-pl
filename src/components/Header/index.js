import React, { Component } from 'react'
import './style.css'
import { logoutUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {drawerOpen: false, dialogOpen: false, snackBarOpen: false};
    }

    componentWillReceiveProps() {
        this.setState({ snackBarOpen: true})
    }

    handleLogout = () => {
        this.props.logoutUser();
    }

    handleDrawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});
    handleDrawerClose = () => this.setState({drawerOpen: false});
    handleDialogOpen = () => {this.setState({dialogOpen: true});};
    handleDialogClose = () => {this.setState({dialogOpen: false});};
    handleSnackBarClose = () => {this.setState({snackBarOpen: false})}


  render() {
    const actions = [
        <FlatButton
          label="Anuluj"
          primary={true}
          onClick={this.handleDialogClose}
        />,
        <FlatButton
          label="Wyloguj"
          secondary={true}
          onClick={this.handleLogout}
        />,
      ];
    return (
        <div>
        <div className = 'header'>
            <i class="fas fa-bars" title= 'Menu' onClick={this.handleDrawerToggle}></i>
            <img src = {require('./podwiez2.png')}></img>
            <i class="fas fa-sign-out-alt" title= 'Wyloguj się' onClick = {this.handleDialogOpen} ></i>
        </div>
      <Drawer
      docked={false}
      width={200}
      open={this.state.drawerOpen}
      onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
    >
      <MenuItem onClick={this.handleDrawerClose}>Menu Item</MenuItem>
      <MenuItem onClick={this.handleDialogOpen}>Wyloguj się</MenuItem>
    </Drawer>

         
        <Dialog
          title = "Potwierdź wylogowanie"
          actions={actions}
          modal={true}
          open={this.state.dialogOpen}
          onRequestClose={this.handleDialogClose}
        >
          Czy na pewno chcesz się wylogować?
        </Dialog>

        <Snackbar
          open={this.state.snackBarOpen}
          message="Poprawnie zalogowano"
          autoHideDuration={5000}
          onRequestClose = {this.handleSnackBarClose}
        />

    </div>
    )
  }
}

const mapStateToProps = ({ user }) =>{
  return {
    isAuth: user.isAuth
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        logoutUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)