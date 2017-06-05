import React, { Component } from "react"
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="row">
					<div className="col s12">
						<h1>App Home</h1>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<h4>React components to check out</h4>
						<ul className="collection">
							<li className="collection-item"><a target="_blank" href='https://github.com/akiran/react-slick'>React Slick</a></li>
							<li className="collection-item"><a target="_blank" href='https://github.com/hzdg/react-google-analytics'>Google analytics</a></li>
							<li className="collection-item"><a target="_blank" href='https://github.com/gorangajic/react-icons'>Icons</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Home