import { 
    FETCH_INITIAL_DATA_PENDING, 
    FETCH_INITIAL_DATA_SUCCESS, 
    ADD_RIDE_PENDING,
    ADD_RIDE_SUCCESS,
    ADD_RIDE_ERROR,
    FETCH_ACCOUNT_PENDING,
    FETCH_ACCOUNT_SUCCESS} from "../actions/dataActions";

const initialState = {
    isFetching: false,
    postRidePending: false,
    postRideSuccess: false,
    fetchAccountPending: false,
    fetchAccountSuccess: false,
    accountData: null,
    ridesData: null
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INITIAL_DATA_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_INITIAL_DATA_SUCCESS:
            return {
                ...state,
                isFetching: true,
                ridesData: action.response
            }
        case ADD_RIDE_PENDING:
            return {
                ...state,
                postRidePending: true,
            }
        case ADD_RIDE_SUCCESS:
            return {
                ...state,
                postRidePending: false,
                postRideSuccess: true
            }
        case ADD_RIDE_ERROR:
            return{
                ...state,
                postRidePending: false,
                postRideSuccess: false
            }
        case FETCH_ACCOUNT_PENDING: 
            return{
                ...state,
                fetchAccountPending: true
            }
        case FETCH_ACCOUNT_SUCCESS:
            return{
                ...state,
                fetchAccountPending: false,
                fetchAccountSuccess: true,
                accountData: action.accountData
            }
        
        default:
            return state;
    }
}

export default dataReducer