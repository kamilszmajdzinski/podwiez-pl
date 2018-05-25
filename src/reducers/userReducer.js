import { USER_LOGIN_ERROR, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS } from "../actions/userActions";

const initialState = {
    isFetching: false,
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case USER_LOGIN_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: action.err
            }
        case USER_LOGIN_SUCCESS: 
            return{
                ...state,
                isFetching: false,
                isAuth: true
            }
        default:
            return state;
    }
}

export default userReducer