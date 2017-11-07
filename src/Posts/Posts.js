import React, { Component } from 'react';
import Post from '../Post';
import './Posts.css';

class Posts extends Component {
	state = {};

	render() {
		// Save the posts
		var posts = this.props.posts,
			postslist = [];
		// Create the posts
		postslist = Object.keys(posts).map(function(key) {
			return (
				<Post
					key={posts[key].id}
					id={posts[key].id}
					content={posts[key]}
				/>
			);
		});

		return <div className="posts">{postslist}</div>;
	}
}

export default Posts;
