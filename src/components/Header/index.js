import React, { Component } from 'react'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <div className = 'header'>
        <img src = {require('./podwiez2.png')}></img>
      </div>
    )
  }
}
