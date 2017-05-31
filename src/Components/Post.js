import React, { Component } from "react"

class Post extends Component {
	render() {
		return (
			<li>
				<h4>{this.props.title}</h4>
				<p>{this.props.body}</p>
			</li>
		)
	}
}
export default Post