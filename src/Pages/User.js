import React, { Component } from "react"
import {connect} from "react-redux"
import UserDetails from "../Components/UserDetails"
import PostList from "../Components/PostsList"
import {fetchUser, fetchUserPosts} from "../Actions/userActions"

class User extends Component {

	componentWillMount(){
		this.props.dispatch(fetchUser({ id: this.props.match.params.id }))
		this.props.dispatch(fetchUserPosts({ id: this.props.match.params.id }))
	}

	/*componentDidMount(){
	}*/

	render() {
		return (
			<div className="user">
				<UserDetails name={this.props.user.name} email={this.props.user.email} id={this.props.user.id} />
				<PostList posts={this.props.posts} name={this.props.user.name} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	posts: store.posts.posts,
	user: store.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(User)