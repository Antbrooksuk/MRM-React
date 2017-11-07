import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
	render() {
		return (
			<div className="post">
				<h4>{this.props.content.title}</h4>
				<p>{this.props.content.body}</p>
			</div>
		);
	}
}

export default Post;
