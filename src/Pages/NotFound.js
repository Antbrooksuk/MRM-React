import React, { Component } from "react"
import { Link } from 'react-router-dom'

class NotFound extends Component {
	render() {
		return (
			<div className="error">
				<div className="row">
					<div className="col s12">
						<h1>404</h1>
						<p>Not Found</p>
						<Link to='/'>&larr; Home</Link>
					</div>
				</div>
			</div>
		)
	}
}
export default NotFound