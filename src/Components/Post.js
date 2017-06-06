import React, { Component } from "react"
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazy-load';

// Single User post
class Post extends Component {
	render() {
		return (
				<li className="collection-item">
					<h4>{this.props.title}</h4>
					<p>{this.props.body}</p>
					<LazyLoad height={480}>
						<img src="/images/ph.jpg" />
					</LazyLoad>
				</li>
		)
	}
}

Post.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
}

export default Post