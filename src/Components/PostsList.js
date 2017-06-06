import React, { Component } from "react"
import PropTypes from 'prop-types'
import Post from "./Post"
import Preloader from "./Preloader"
import {connect} from "react-redux"
import {fetchUserPosts, clearUserPosts} from "../actions"

// List of user posts
class PostList extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			clicked: false
		}
	}

	getPosts() {
		this.props.dispatch(fetchUserPosts({ id: this.props.id }))
	}

	clearPosts() {
		this.props.dispatch(clearUserPosts({ id: this.props.id }))
	}

	setClicked() {
		if(!this.state.clicked) {
			this.setState({ clicked: true })
		}
	}

	render() {
		var postNodes = this.props.posts.map(function(post){
			return (
				<Post title={post.title} body={post.body} key={post.id} />
			)
		})
		return (
			<div className="user_posts" onClick={this.setClicked.bind(this)}>
				{ this.state.clicked && (
					<h4>Clicked!</h4>
				)}
				
				{ this.props.fetching && (
					<Preloader  />
				)}

				{ (this.props.posts.length > 0) && (
					<ul className="collection">
						{postNodes}
					</ul>
				)}

				{ !this.props.fetching && (this.props.posts.length === 0) && (
					<button className="btn" onClick={this.getPosts.bind(this)}>Get This Users Posts</button>
				)}
				
				{ !this.props.fetching && (this.props.posts.length > 0) && (
					<button className="btn" onClick={this.clearPosts.bind(this)}>Clear Posts</button>
				)}

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	posts: store.posts.posts,
	fetching: store.posts.fetching
})

PostList.propTypes = {
	fetching: PropTypes.bool.isRequired,
	posts: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)