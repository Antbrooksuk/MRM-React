import React, { Component } from "react"

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<h1>App Home</h1>
				<a href="/users">Users</a>
			</div>
		)
	}
}