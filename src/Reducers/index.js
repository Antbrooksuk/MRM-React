import {combineReducers} from "redux"
import users, {user, posts, article} from "./reducers"
// Users is default, rest are variables
export default combineReducers({
	users, user, posts, article
})