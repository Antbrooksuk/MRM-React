import {combineReducers} from "redux"
import * as reducers from "./reducers"
// Users is default, rest are variables
export default combineReducers({
	...reducers
})