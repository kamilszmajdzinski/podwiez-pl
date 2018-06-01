import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userReducer from './userReducer'
import dataReducer from './dataReducer'

export default combineReducers({
    routing: routerReducer,
    user: userReducer,
    data: dataReducer
})