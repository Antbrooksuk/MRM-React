import React, { Component } from "react"
import {connect} from "react-redux"
import UserList from "../components/UserList"
import Preloader from "../components/Preloader"
import {fetchUsers} from "../actions"
import { Link } from 'react-router-dom'

class Users extends Component {

	componentWillMount(){
		this.props.dispatch(fetchUsers())
	}

	refreshUsers(){
		this.props.dispatch(fetchUsers())
	}

	render() {
		return (
			<div className="users">
				<div className="row">
					<div className="col s12">
						<h1>User list</h1>

						{(!this.props.users || this.props.fetching) && (
							<Preloader/>
						)}

						{(!this.props.users && !this.props.fetching) && (
							<p>None found</p>
						)}

						{(Object.keys(this.props.users).length !== 0) && (
							<UserList users={this.props.users} onRefresh={this.refreshUsers.bind(this)} />
						)}

					</div>
				</div>
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