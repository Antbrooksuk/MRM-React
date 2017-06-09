import {combineReducers} from "redux"
import * as reducers from "./reducers"
import { loadingBarReducer } from 'react-redux-loading-bar'
// Users is default, rest are variables
export default combineReducers({
	...reducers,
	loadingBar: loadingBarReducer
})