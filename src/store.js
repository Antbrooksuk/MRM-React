import promise from "redux-promise-middleware"
import thunk from "redux-thunk"
import reducer from "./redux"
import { applyMiddleware, createStore } from "redux"
import { logger } from "redux-logger"
// No need to play about with this
var middleware
if (process.env.NODE_ENV === 'production') {
	middleware = applyMiddleware(thunk, promise())
} else {
	middleware = applyMiddleware(thunk, promise(), logger)
}
export default createStore(reducer, middleware)
