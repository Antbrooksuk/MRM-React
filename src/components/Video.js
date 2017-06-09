import React, { Component } from "react"
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

// Single User post
class Video extends Component {

	state = {
		url: null,
		playing: true,
		volume: 0.8,
		played: 0,
		loaded: 0,
		duration: 0
	}

	onProgress = state => {
		if (!this.state.seeking) {
			this.setState(state)
		}
	}

	render() {

		const {
			url, playing, 
			volume, played, 
			loaded, duration
		} = this.state

		return (
			<div className="videoPlayer">
				<ReactPlayer 
					width="auto" 
					height="420px" 
					progressFrequency={100}
					controls={true} 
					url={this.props.url} 
					playing={this.props.playing} 
					volume={this.props.volume} 
					onProgress={this.onProgress} 
				 	onDuration={duration => this.setState({ duration })}
				/>
				<p>{(duration * played).toFixed(1)}</p>
			</div>
		)
	}
}

Video.propTypes = {
	url: PropTypes.string.isRequired,
	playing: PropTypes.bool.isRequired,
	volume: PropTypes.number.isRequired
}

export default Video