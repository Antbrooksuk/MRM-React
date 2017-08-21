import React, { Component } from "react"
import Post from "../components/Post"

class Posts extends Component {

	state = {

	}

	componentWillMount() {
		
	}

	componentWillReceiveProps(nextProps) {
		
	}

	render = () => {
		// Save the posts
		var posts = this.props.posts.data, 
			postslist = []
		// Create the posts
		postslist = Object.keys(posts).map(function(key){
			return <Post key={posts[key].id} content={posts[key]} />
		})
		
		return (
			<div className="posts">
				{postslist}
			</div>
		)
	}
}

export default Posts

