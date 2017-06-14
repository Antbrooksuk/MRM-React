import React, { Component } from "react"
import { Link } from 'react-router-dom'

class HomePage extends Component {
	render() {
		return (
			<div className="home">
				<h1>App Home</h1>
				<ul className="collection with-header">
					<li className="collection-header"><h4>React components to check out</h4></li>
					<li className="collection-item"><a target="_blank" href='https://github.com/akiran/react-slick'>React Slick</a></li>
					<li className="collection-item"><a target="_blank" href='https://github.com/hzdg/react-google-analytics'>Google analytics</a></li>
					<li className="collection-item">Social</li>
				</ul>
			</div>
		)
	}
}
export default HomePage