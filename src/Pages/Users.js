import React, { Component } from "react"
import {connect} from "react-redux"
import UserList from "../Components/UserList"
import {fetchUsers} from "../Actions/userActions"

class Users extends Component {

	componentWillMount(){
		this.props.dispatch(fetchUsers())
	}

	refreshUsers(){
		this.props.dispatch(fetchUsers())
	}

	render() {
		if(!this.props.users || this.props.fetching) {
			return (
				<div className="user">
					<h1>User list</h1>
					<div className="loading">
						Loading ...
					</div>
					<a href="/">&larr; Home</a>
				</div>
			)
		} else if(this.props.users.length === 0) {
			return (
				<div className="user">
					<h1>User list</h1>
					<p>None found</p>
					<a href="/">&larr; Home</a>
				</div>
			)
		}
		return (
			<div className="users">
				<h1>User list</h1>
				<UserList users={this.props.users} onRefresh={this.refreshUsers.bind(this)} />
				<a href="/">&larr; Home</a>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	users: store.users.users,
	fetching: store.users.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)