import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAccountData } from "../../actions/dataActions";
import Header from "../Header";
import Footer from "../AppFooter";
import './style.css'
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class MyAccount extends Component {

componentDidMount() {
    //dev version only
    this.props.fetchAccountData("dXNlckBnbWFpbC5jb206cXdlcnR5")
    // const { fetchAccountData, credentials } = this.props
    // credentials && fetchAccountData(credentials)
}

renderRide = (ride) => {
    
    return(
        <Card style = {{ borderBottom: `1px solid rgba(0,0,0,0.3)` }}>
            <CardHeader
                title= "Przejazd"
                subtitle="Aktywny"
                subtitleStyle = {{color: `#28A745` }}
            />
            <CardText>
                <p><strong>Z:</strong> {ride.fromPlace}</p>
                <p><strong>Do:</strong> {ride.toPlace} </p>
                <p><strong>Liczba miejsc: </strong> {ride.availablePlaces} <strong>Cena: </strong>{ride.amount} zł/miejsce</p>
            </CardText>
            <CardActions style = {{ textAlign: `center`}}>
                <RaisedButton 
                    label="Edytuj" 
                    labelColor = '#FFFFFF'
                    backgroundColor = '#003459' />
                <RaisedButton 
                    label="Usuń"
                    labelColor = '#FFFFFF'
                    backgroundColor = '#DC3545' />
            </CardActions>
        </Card>
    )
}

  render() {

    const { accountData, ridesData } = this.props
    const tempRidesData = ridesData.slice(0, 2)

    return (
      <div className = 'myAccount'>
        <Header />
            <div className = 'myAccountContainer'>
                    {accountData ? (
                        <div className = 'userDiv'>
                            <h2>Dane użytkownika  <i class="fas fa-user-edit"></i></h2>
                            <p><strong>Imię i nazwisko:</strong> {accountData.firstName} {accountData.lastName}</p>
                            <p><strong>Email:</strong> {accountData.email}</p>
                            
                        </div>
                    ):(
                        <CircularProgress 
                            size={60}
                            style = {{ margin: `auto` }} 
                            thickness={7} 
                            color = "#003459"/>
                    )}

                    {tempRidesData ? (
                        <div className = 'ridesDiv'>
                            <h2>Twoje przejazdy</h2>
                            {tempRidesData.map(ride => this.renderRide(ride))}
                        </div>
                    ):(
                        <CircularProgress 
                            size={60}
                            style = {{ margin: `auto` }} 
                            thickness={7} 
                            color = "#003459"/>
                    )}
            </div>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = ({ user, data }) => {
    return{
        credentials: user.credentials,
        accountData: data.accountData,
        fetchAccountPending: data.fetchAccountPending,
        ridesData: data.ridesData
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchAccountData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)