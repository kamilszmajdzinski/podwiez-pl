import { 
    FETCH_INITIAL_DATA_PENDING, 
    FETCH_INITIAL_DATA_SUCCESS, 
    ADD_RIDE_PENDING,
    ADD_RIDE_SUCCESS,
    ADD_RIDE_ERROR} from "../actions/dataActions";

const initialState = {
    isFetching: false,
    postRidePending: false,
    postRideSuccess: false
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
                data: action.data
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
        
        default:
            return state;
    }
}

export default dataReducer