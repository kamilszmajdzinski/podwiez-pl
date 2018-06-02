import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default class AddRide extends Component {
  render() {
    return (
      <div className = 'addRide'>
            <Header />
                <p>Dodaj przejazd</p>
            <Footer />
      </div>
    )
  }
}
