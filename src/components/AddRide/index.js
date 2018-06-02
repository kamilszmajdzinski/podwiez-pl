import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './style.css'

export default class AddRide extends Component {
  render() {
    return (
      <div className = 'addRide'>
            <Header />
                <div className = 'addRideContainer'>
                    <p>Dodaj przejazd</p>
                    
                    <TextField
                        floatingLabelText="Miejsce wyjazdu"
                    />
                    <TextField
                        floatingLabelText="Miejsce docelowe"
                    />                    
                </div>
            <Footer />
      </div>
    )
  }
}
