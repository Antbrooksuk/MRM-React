import React, { Component } from "react"

class Post extends Component {

	state = {

	}

	componentWillMount() {
		
	}

	componentWillReceiveProps(nextProps) {
		
	}

	render = () => {
		return (
			<div className="post">
				<h4>{this.props.content.title}</h4>
				<p>{this.props.content.body}</p>
			</div>
		)
	}

}

export default Post

