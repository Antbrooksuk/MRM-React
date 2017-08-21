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

		var posts = this.props.posts.map(function(post){
			return <Post key={post.id} content={post} />
		})
		
		return (
			<div>
				{posts}
			</div>
		)
	}
}

export default Posts

