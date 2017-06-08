import {applyMiddleware, createStore} from "redux"
import { logger } from "redux-logger"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"
import reducer from "./reducers"
import { loadingBarMiddleware } from 'react-redux-loading-bar'

// No need to play about with this
const middleware = applyMiddleware(thunk, promise(), loadingBarMiddleware(), logger)
export default createStore(reducer, middleware)
