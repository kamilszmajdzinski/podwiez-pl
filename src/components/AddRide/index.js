import React, { Component } from 'react'
import Header from '../Header'
import AppFooter from '../AppFooter'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './style.css'
import AppMap from '../AppMap' 
import RaisedButton from 'material-ui/RaisedButton'

export default class AddRide extends Component {

     style = {
        width: '80%',
        margin: '0 auto'
    }

  render() {
    return (
      <div className = 'addRide'>
            <Header />
                <div className = 'addRideContainer'>
                    <p>Dodaj przejazd</p>
                    
                    <TextField
                        className = 'input'
                        style ={this.style}
                        floatingLabelText="Miejsce wyjazdu"
                    />
                    <TextField
                        className = 'input'
                        style ={this.style}
                        floatingLabelText="Miejsce docelowe"
                    />

                    <AppMap />
                    <RaisedButton 
                        backgroundColor = "#003459" 
                        label="Nastęny krok"
                        labelColor = 'white'  />
                </div>
            <AppFooter />
      </div>
    )
  }
}
