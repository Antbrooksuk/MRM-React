import React, { Component } from "react"
import Cards from "../components/Cards"
import { connect } from "react-redux"
import { fetchPosts } from "../redux/actions"

class HomePage extends Component {

	state = {
		
	}

	updatePosts = () => {
		this.props.dispatch(fetchPosts())
	}

	componentWillMount = () => {
		if(Object.keys(this.props.posts).length === 0) {
			this.props.dispatch(fetchPosts())
		}
	}

	componentWillReceiveProps(nextProps) {
		nextProps
	}

	render = () => {

		var posts = this.props.posts

		if(this.props.posts) {
			return (
				<div className="home">
					<Posts posts={posts} />
					<button onClick={this.updatePosts.bind(this)}>Update</button>
				</div>
			)
		} 

		return (
			<div className="home">
				<p>Loading ... </p>				
			</div>
		)

	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	posts: store.posts.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)