import { fetchInitialData, fetchUserData } from "../api/apiData";

export const FETCH_INITIAL_DATA_PENDING = 'FETCH_INITIAL_DATA_PENDING'
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS'
export const FETCH_INITIAL_DATA_ERROR = 'FETCH_INITIAL_DATA_ERROR'

export const FETCH_ACCOUNT_PENDING = 'FETCH_ACCOUNT_PENDING'
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS'
export const FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR'



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