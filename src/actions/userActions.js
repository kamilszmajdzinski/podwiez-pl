import { loginUser, registerUser } from '../api/apiUser'
import { showNotification } from "../actions/notificationsActions";

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'
export const RESET_LOGIN_ERROR = "RESET_LOGIN_ERROR"

export const USER_REG_PENDING = 'USER_REG_PENDING'
export const USER_REG_SUCCESS = 'USER_REG_SUCCESS'
export const USER_REG_ERROR = 'USER_REG_ERROR'

export const USER_LOGOUT = 'USER_LOGOUT'



export function sumbitLogin(encoded){
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_PENDING})
        return loginUser(encoded)
            .then(res => {
                if (res.status === 200) {
                    dispatch({ 
                        type: USER_LOGIN_SUCCESS
                    })
                    showNotification('Zalogowano poprawnie.')(dispatch)
                }else if (res.status === 401) {
                    dispatch({ type: USER_LOGIN_ERROR, err: 'Nieprawidłowy login i/lub hasło' })
                }
                console.log(res);
                
            })
            .catch(err => 
                dispatch({ 
                    type: USER_LOGIN_ERROR,
                    err
                 })
            )
    }
}

export function submitRegister(body){
    return dispatch => {
        dispatch({ type: USER_REG_PENDING })
            return registerUser(body)
                .then(res => {
                    if (res.status === 201) {
                        dispatch({ type: USER_REG_SUCCESS })
                        console.log(res)
                    }
                })
                .catch(err => {
                    dispatch({ type: USER_REG_ERROR, err })
                    console.log(err)
                })

    }
}

export function resetLoginError() {
    return dispatch => {
        dispatch({ type: RESET_LOGIN_ERROR })
    }
}

export function logoutUser(params) {
    return dispatch => {
        dispatch({ type: USER_LOGOUT })
    }
}