import React, { Component } from "react"
import PropTypes from 'prop-types'
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
						<div id="map">
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

Map.propTypes = {
	center: PropTypes.object.isRequired,
	zoom: PropTypes.number.isRequired
}

export default Map