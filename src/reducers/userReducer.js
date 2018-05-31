import { USER_LOGIN_ERROR, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_REG_PENDING, USER_REG_SUCCESS, USER_REG_ERROR } from "../actions/userActions";

const initialState = {
    isFetching: false,
    isAuth: false,
    isCreatingUser: false,
    isCreated: false
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
        case USER_REG_PENDING:
            return{
                ...state,
                isCreatingUser: true,
            }
        case USER_REG_SUCCESS:
            return{
                ...state,
                isCreatingUser: false,
                isCreated: true
            }
        case USER_REG_ERROR: 
            return{
                ...state,
                isCreated: false,
                isCreatingUser: false
            }
        default:
            return state;
    }
}

export default userReducer