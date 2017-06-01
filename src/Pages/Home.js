import React, { Component } from "react"
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="row">
					<div className="col s12">
						<h1>App Home</h1>
						<ul className="collection">
							<li className="collection-item"><Link to='/users'>Users</Link></li>
							<li className="collection-item"><Link to='/form'>Form</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Home