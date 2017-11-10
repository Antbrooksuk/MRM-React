import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import './GoogleMap.css';

const propTypes = {
	center: PropTypes.object.isRequired,
	zoom: PropTypes.number.isRequired
};

const defaultProps = {
	center: { lat: 59.95, lng: 30.33 },
	zoom: 11
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
	render() {
		return (
			<div className="googlemap">
				<div className="map-inner">
					<GoogleMapReact
						defaultCenter={this.props.center}
						defaultZoom={this.props.zoom}
					>
						<AnyReactComponent
							lat={59.955413}
							lng={30.337844}
							text={'Kreyser Avrora'}
						/>
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}

GoogleMap.propTypes = propTypes;
GoogleMap.defaultProps = defaultProps;

export default GoogleMap;
