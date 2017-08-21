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
		var posts = this.props.posts, postslist = []
		if(Object.keys(posts).length > 0) {
			postslist = Object.keys(posts.data).map(function(key){
				return <Post key={posts.data[key].id} content={posts.data[key]} />
			})
		}
		
		return (
			<div>
				{postslist}
			</div>
		)
	}
}

export default Posts

