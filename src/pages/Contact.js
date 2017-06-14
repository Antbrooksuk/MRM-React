import React, { Component } from "react"
import { Link } from 'react-router-dom'
import FormEntry from "../components/Form"
import Map from "../components/Map"

class ContactPage extends React.Component {

	static defaultProps = {
		map: {
			center: {lat: 51.505236, lng: -0.096760},
			zoom: 11,
			nodes: [{
				id: 1, lat: 51.505236, lng: -0.096760, title: "MRM Meteorite"
			}]
		}
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col s12">
						<h1>Contact page</h1>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<FormEntry />
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<Map center={this.props.map.center} zoom={this.props.map.zoom} nodes={this.props.map.nodes} />
					</div>
				</div>
			</div>
		)
	}
}
export default ContactPage
