import React, { Component } from "react"
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>

// Single User post
class Map extends Component {
	render() {
		var mapNodes = this.props.nodes.map(function(node){
			return (
				<AnyReactComponent key={node.id} lat={node.lat} lng={node.lng} text={node.title} />
			)
		})
		return (
			<GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
				{mapNodes}
			</GoogleMapReact>
		)
	}
}

Map.propTypes = {
	center: PropTypes.object.isRequired,
	zoom: PropTypes.number.isRequired
}

export default Map