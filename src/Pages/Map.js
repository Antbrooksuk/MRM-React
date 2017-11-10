import React, { Component } from 'react';
import GoogleMap from '../Components/GoogleMap';
import './Map.css';

class MapPage extends Component {
	render() {
		const center = { lat: 59.95, lng: 30.33 };
		return (
			<div className="page map">
				<h1>Map</h1>
				<GoogleMap center={center} zoom={12} />
			</div>
		);
	}
}
export default MapPage;
