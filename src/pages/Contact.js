import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Map from "../components/Map"

class Contact extends Component {

	static defaultProps = {
		center: {lat: 51.505236, lng: -0.096760},
		zoom: 11,
		nodes: [{
			id: 1, lat: 51.505236, lng: -0.096760, title: "MRM Meteorite"
		}]
	}

	render() {
		return (
			<div className="map">
				<div className="row">
					<div className="col s12">
						<h1>Contact</h1>
						<div id="map">
							<Map center={this.props.center} zoom={this.props.zoom} nodes={this.props.nodes} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Contact.propTypes = {
	center: PropTypes.object.isRequired,
	zoom: PropTypes.number.isRequired,
	nodes: PropTypes.array.isRequired
}

export default Contact