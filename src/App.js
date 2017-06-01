import React, { Component } from "react"
import {Provider} from "react-redux"
import store from "./store"
import AppRouter from './router'
import './stylesheets/main.scss'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{AppRouter(store)}
			</Provider>
		)
	}
}