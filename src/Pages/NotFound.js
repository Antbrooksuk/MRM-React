import React, { Component } from "react"

class NotFound extends Component {
	render() {
		return (
			<div className="error">
				<h1>404</h1>
				<p>Not Found</p>
				<a href="/">Home</a>
			</div>
		)
	}
}
export default NotFound;