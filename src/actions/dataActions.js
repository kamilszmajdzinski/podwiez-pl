import { fetchInitialData } from "../api/apiData";

export const FETCH_INITIAL_DATA_PENDING = 'FETCH_INITIAL_DATA_PENDING'
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS'
export const FETCH_INITIAL_DATA_ERROR = 'FETCH_INITIAL_DATA_ERROR'


export function fetchInitData() {
    return (dispatch) => {
        dispatch({ type: FETCH_INITIAL_DATA_PENDING })
        return fetchInitialData()
            .then(res => console.log(res))
    }
}