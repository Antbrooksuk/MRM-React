import React, { Component } from "react"
import PropTypes from 'prop-types';
import UserLink from "./UserLink"

class UserList extends Component {
	render() {
		if(!this.props.users) {
			return (
				<div className="user_list">
					<div class="loading">
						Loading ...
					</div>
				</div>
			)
		} else if(this.props.users.length === 0) {
			return (
				<div className="user_list">
					<h4>None found</h4>
				</div>
			)
		}
		var userNodes = this.props.users.map(function(user){
			return (
				<UserLink name={user.name} email={user.email} key={user.id} id={user.id} />
			)
		})
		return (
			<div className="user_list">
				<ul>{userNodes}</ul>
				<button onClick={this.props.onRefresh}>Refresh users</button>
			</div>
		)
	}
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	onRefresh: PropTypes.func.isRequired
}

export default UserList

