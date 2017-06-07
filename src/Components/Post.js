import React, { Component } from "react"
import PropTypes from 'prop-types'
import Image from 'react-lazy-image';

// Single User post
class Post extends Component {
	render() {
		return (
			<li className="collection-item">
				<h4>{this.props.title}</h4>
				<p>{this.props.body}</p>
				<Image source="/static/images/ph.jpg" />
			</li>
		)
	}
}

Post.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
}

export default Post