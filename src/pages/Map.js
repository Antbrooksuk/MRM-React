import React, { Component } from "react"
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>

class Map extends Component {

	static defaultProps = {
		center: {lat: 51.505236, lng: -0.096760},
		zoom: 11
	}

	render() {
		return (
			<div className="map">
				<div className="row">
					<div className="col s12">
						<h1>Map</h1>
						<div className="map">
							<GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
								<AnyReactComponent lat={51.505236} lng={-0.096760} text={'MRM Meteorite'} />
							</GoogleMapReact>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Map