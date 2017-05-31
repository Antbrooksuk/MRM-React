import React, { Component } from "react"
import {connect} from "react-redux"
import UserDetails from "../Components/UserDetails"
import PostList from "../Components/PostsList"
import {fetchUser} from "../Actions/userActions"

class User extends Component {

	componentWillMount(){
		this.props.dispatch(fetchUser({ id: this.props.match.params.id }))
	}

	render() {
		if(!this.props.user || this.props.fetching) {
			return (
				<div className="user">
					<h1>User details</h1>
					<div className="loading">
						Loading ...
					</div>
					<a href="/users">&larr; Users</a>
				</div>
			)
		} else if(this.props.user.length === 0) {
			return (
				<div className="user">
					<h1>User details</h1>
					<p>None found</p>
					<a href="/users">&larr; Users</a>
				</div>
			)
		}
		return (
			<div className="user">
				<h1>User details</h1>
				<UserDetails name={this.props.user.name} email={this.props.user.email} id={this.props.user.id} />
				<PostList name={this.props.user.name} id={this.props.user.id} />
				<a href="/users">&larr; Users</a>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	user: store.user.user,
	fetching: store.user.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(User)