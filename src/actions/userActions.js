import { loginUser, registerUser } from '../api/apiUser'


export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

export const USER_REG_PENDING = 'USER_REG_PENDING'
export const USER_REG_SUCCESS = 'USER_REG_SUCCESS'
export const USER_REG_ERROR = 'USER_REG_ERROR'



export function sumbitLogin(encoded){
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_PENDING})
        return loginUser(encoded)
            .then(res => {
                if (res.status === 200) {
                    dispatch({ 
                        type: USER_LOGIN_SUCCESS
                    })
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
                    }
                })
                .catch(err => {
                    dispatch({ type: USER_REG_ERROR, err })
                })

    }
}