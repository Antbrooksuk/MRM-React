import React, { Component } from "react"
import {connect} from "react-redux"
import UserList from "../Components/UserList"
import {fetchUsers} from "../Actions/userActions"

class Users extends Component {
	/*constructor(){
		super()
	}*/

	componentWillMount(){
		this.props.dispatch(fetchUsers())
	}

	/*componentDidMount(){
	}*/

	render() {
		console.log(this.props)
		return (
			<div className="users">
				<h1>User list</h1>
				<UserList users={this.props.users} />
				<a href="/">&larr; Home</a>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	users: store.users.users
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)