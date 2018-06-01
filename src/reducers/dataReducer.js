import { FETCH_INITIAL_DATA_PENDING, FETCH_INITIAL_DATA_SUCCESS } from "../actions/dataActions";
const initialState = {
    isFetching: false,
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
        default:
            return state;
    }
}

export default dataReducer