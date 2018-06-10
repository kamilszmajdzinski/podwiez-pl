import { fetchInitialData, fetchUserData } from "../api/apiData";
import { showNotification } from "../actions/notificationsActions";
import { addRide } from "../api/apiData";

export const FETCH_INITIAL_DATA_PENDING = 'FETCH_INITIAL_DATA_PENDING'
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS'
export const FETCH_INITIAL_DATA_ERROR = 'FETCH_INITIAL_DATA_ERROR'

export const FETCH_ACCOUNT_PENDING = 'FETCH_ACCOUNT_PENDING'
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS'
export const FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR'

export const ADD_RIDE_PENDING = 'ADD_RIDE_PENDING'
export const ADD_RIDE_SUCCESS = 'ADD_RIDE_SUCCESS'
export const ADD_RIDE_ERROR = 'ADD_RIDE_ERROR'




export function fetchInitData(credentials) {
    return (dispatch) => {
        dispatch({ type: FETCH_INITIAL_DATA_PENDING })
        return fetchInitialData(credentials)
            .then(res => res.json())
            .then(response => console.log(response))
    }
}

export function fetchAccountData(credentials) {
    return dispatch => {
        dispatch({ type: FETCH_ACCOUNT_PENDING })
        return fetchUserData(credentials)
            .then(res => res.json())
            .then(resJson => console.log(resJson))
    }
}

export function addRideAction(credentials, body){
    return dispatch => {
        dispatch({ type: ADD_RIDE_PENDING })
        return addRide(credentials, body)
            .then(res => {
                if (res.status === 201) {
                    dispatch({ type: ADD_RIDE_SUCCESS })
                    showNotification('Dodano przejazd. Przejazd dostępny w zakładce Moje przejazdy')(dispatch)
                }
            })
            .catch(err => dispatch({ type: ADD_RIDE_ERROR }))
    }
}