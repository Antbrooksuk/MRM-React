import React, { Component } from "react"
import Post from "./Post"

export default class PostList extends Component {
	render() {
		if(Object.getOwnPropertyNames(this.props.posts).length === 0) {
			return (
				<div>
					None
				</div>
			)
		}
		var postNodes = this.props.posts.map(function(post){
			return (
				<Post title={post.title} body={post.body} key={post.id} />
			)
		})
		return (
			<div>
				<h2>Posts by {this.props.name}</h2>
				{postNodes}
			</div>
		)
	}
}