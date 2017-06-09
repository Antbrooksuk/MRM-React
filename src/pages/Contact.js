import React, { Component } from "react"
import Map from "../components/Map"

class Contact extends Component {

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
			<div className="map">
				<h1>Contact</h1>
				<div id="map">
					<Map center={this.props.map.center} zoom={this.props.map.zoom} nodes={this.props.map.nodes} />
				</div>
			</div>
		)
	}
}

export default Contact