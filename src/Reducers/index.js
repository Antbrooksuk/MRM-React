import {combineReducers} from "redux"
import users, {user, posts, article} from "./reducers"
import { loadingBarReducer } from 'react-redux-loading-bar'
// Users is default, rest are variables
export default combineReducers({
	users, user, posts, article, 
	loadingBar: loadingBarReducer
})