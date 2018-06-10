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
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


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

    handlePlacesChange = (event, index, value) => this.setState({ availablePlaces: value });

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
                    <div  className = 'dataDiv'>
                        <div className = 'daysDiv'>
                            <Toggle
                                label="Poniedziałek"
                                toggled = {this.state.monRide}
                                onToggle = {e => this.setState({ monRide: true })}
                                />
                            <Toggle
                                label="Wtorek"
                                toggled = {this.state.tueRide}
                                onToggle = {e => this.setState({ tueRide: true })}
                                />
                            <Toggle
                                label="Środa"
                                toggled = {this.state.wedRide}
                                onToggle = {e => this.setState({ wedRide: true })}
                                />
                            <Toggle
                                label="Czwartek"
                                toggled = {this.state.thuRide}
                                onToggle = {e => this.setState({ thuRide: true })}
                                />
                            <Toggle
                                label="Piątek"
                                toggled = {this.state.friRide}
                                onToggle = {e => this.setState({ friRide: true })}
                                />
                            <Toggle
                                label="Sobota"
                                toggled = {this.state.satRide}
                                onToggle = {e => this.setState({ satRide: true })}
                                />
                            <Toggle
                                label="Niedziela"
                                toggled = {this.state.sunRide}
                                onToggle = {e => this.setState({ sunRide: true })}
                                />
                        </div>
                        <div className = 'amountDiv'>
                            <SelectField
                                floatingLabelText="Liczba miejsc w aucie"
                                value={this.state.availablePlaces}
                                onChange={this.handlePlacesChange}
                            >
                                <MenuItem value={1} primaryText="1" />
                                <MenuItem value={2} primaryText="2" />
                                <MenuItem value={3} primaryText="3" />
                                <MenuItem value={4} primaryText="4" />
                            </SelectField>
                            <TextField
                                hintText="15zł"
                                floatingLabelText="Cena za przejazd (zł)"
                                type="number"
                                value = {this.state.amount}
                                onChange = {e => this.setState({ amount: e.target.value })}
                            />
                        </div>

                    </div>
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
