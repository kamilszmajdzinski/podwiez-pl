import React, { Component } from 'react'
import Header from '../Header'
import AppFooter from '../AppFooter'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './style.css'
import AppMap from '../AppMap' 
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showNotification } from "../../actions/notificationsActions";
import Notifications from '../Notifications/index'

class AddRide extends Component {

    state = {
        placesView: true,
        detailsView: false,
        fromPlace: '',
        toPlace: '',
        monRide: false,
        tueRide: false,
        wedRide: false,
        thuRide: false,
        friRide: false,
        satRide: false,
        sunRide: false,
        amount: null,
        availablePlaces: null
    }

    validatePlacesForm(){
        const { toPlace, fromPlace } = this.state
        const { showNotification } = this.props
        if(!fromPlace){
            showNotification(' Podaj miejsce wyjazdu ')
            console.log('noplaces')
            return false
        }else if (!toPlace) {
            showNotification(' Podaj miejsce docelowe ')
            return false
        }else return true
    }

    confirmPlaces = () => {
        if (this.validatePlacesForm()) {
            this.setState({ detailsView: true, placesView: false })
        }
    }

    goBack = () => {
        this.setState({ detailsView: false, placesView: true })
    }

    renderView = () => {
        
        const { placesView, detailsView } = this.state
        if (placesView) {
            return(
                <div className = 'addRideContainer'>
                    <p>Dodaj przejazd</p>
                        <TextField
                            className = 'input'
                            style ={this.style}
                            floatingLabelText="Miejsce wyjazdu"
                            value = {this.state.fromPlace}
                            onChange = {e => this.setState({ fromPlace: e.target.value })}
                        />
                        <TextField
                            className = 'input'
                            style ={this.style}
                            floatingLabelText="Miejsce docelowe"
                            value = {this.state.toPlace}
                            onChange = {e => this.setState({ toPlace: e.target.value })}
                        />

                        <AppMap />
                        <RaisedButton 
                            backgroundColor = "#003459" 
                            label="Nastęny krok"
                            labelColor = 'rgb(255,255,255)'
                            onClick = {this.confirmPlaces}  />
                </div>
                )
        }else if (detailsView) {
            return(
                <div className = 'addRideContainer'>
                    <p>Dodaj przejazd - podaj szczegóły</p>
                    <RaisedButton 
                            backgroundColor = "#003459" 
                            label="Powrót do wyboru trasy"
                            labelColor = 'rgb(255,255,255)'
                            onClick = {this.goBack}  />
                    <RaisedButton 
                            backgroundColor = "#003459" 
                            label="Nastęny krok"
                            labelColor = 'rgb(255,255,255)'
                            onClick = {this.confirmPlaces}  />
                </div>
            )
        }
    }

     style = {
        width: '80%',
        margin: '0 auto'
    }

  render() {
    return (
      <div className = 'addRide'>
            <Header />
                {this.renderView()}
            <Notifications />
            <AppFooter />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        showNotification
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddRide)
