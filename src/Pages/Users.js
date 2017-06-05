import React, { Component } from "react"
import {connect} from "react-redux"
import UserList from "../components/UserList"
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
		if(!this.props.users || this.props.fetching) {
			return (
				<div className="users">
					<div className="row">
						<div className="col s12">
							<h1>User list</h1>
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
					</div>
				</div>
			)
		} else if(this.props.users.length === 0) {
			return (
				<div className="users">
					<div className="row">
						<div className="col s12">
							<h1>User list</h1>
							<p>None found</p>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className="users">
				<div className="row">
					<div className="col s12">
						<h1>User List</h1>
						<UserList users={this.props.users} onRefresh={this.refreshUsers.bind(this)} />
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