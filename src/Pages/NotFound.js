import React, { Component } from "react"
import { Link } from 'react-router-dom'

class NotFound extends Component {
	render() {
		return (
			<div className="error">
				<h1>404</h1>
				<p>Not Found</p>
				<Link to='/'>Home</Link>
			</div>
		)
	}
}
export default NotFound