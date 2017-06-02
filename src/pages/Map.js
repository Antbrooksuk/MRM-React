import React, { Component } from "react"
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends Component {

	static defaultProps = {
		center: {lat: 59.95, lng: 30.33},
		zoom: 11
	}

	render() {
		return (
			<div className="error">
				<div className="row">
					<div className="col s12">
						<h1>Map</h1>
						<div className="map">
							<GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
								<AnyReactComponent lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} />
							</GoogleMapReact>
						</div>
						<Link to='/'>&larr; Home</Link>
					</div>
				</div>
			</div>
		)
	}
}
export default Map