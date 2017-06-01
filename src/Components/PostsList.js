import React, { Component } from "react"
import Post from "./Post"
import {connect} from "react-redux"
import {fetchUserPosts, clearUserPosts} from "../actions"

class PostList extends Component {

	getPosts() {
		this.props.dispatch(fetchUserPosts({ id: this.props.id }))
	}

	clearPosts() {
		this.props.dispatch(clearUserPosts({ id: this.props.id }))
	}

	render() {
		if(!this.props.posts || this.props.fetching) {
			return (
				<div className="user_posts">
					<h4>Posts by {this.props.name}</h4>
					<div className="preloader-wrapper small active">
						<div className="spinner-layer spinner-green-only">
							<div className="circle-clipper left">
								<div className="circle"></div>
							</div>
							<div className="gap-patch">
								<div className="circle"></div>
							</div>
							<div className="circle-clipper right">
								<div className="circle"></div>
							</div>
						</div>
					</div>
				</div>
			)
		} else if(this.props.posts.length === 0) {
			return (
				<div className="user_posts">
					<h4>Posts by {this.props.name}</h4>
					<button className="btn" onClick={this.getPosts.bind(this)}>Get This Users Posts</button>
				</div>
			)
		}
		var postNodes = this.props.posts.map(function(post){
			return (
				<Post title={post.title} body={post.body} key={post.id} />
			)
		})
		return (
			<div className="user_posts">
				<h4>Posts by {this.props.name}</h4>
				<ul className="collection">
					{postNodes}
				</ul>
				<button className="btn" onClick={this.clearPosts.bind(this)}>Clear Posts</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList)