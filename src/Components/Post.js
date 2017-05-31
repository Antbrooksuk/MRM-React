import React, { Component } from "react"

export default class Post extends Component {
	render() {
		return (
			<div>
				<h4>{this.props.title}</h4>
				<p>{this.props.body}</p>
				<hr/>
			</div>
		)
	}
}