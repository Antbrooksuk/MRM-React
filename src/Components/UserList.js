import React, { Component } from "react"
import PropTypes from 'prop-types'
import UserLink from "./UserLink"
import Preloader from "./Preloader"

// List of users
class UserList extends Component {
	render() {
		var userNodes = this.props.users.map(function(user){
			return (
				<UserLink name={user.name} email={user.email} key={user.id} id={user.id} />
			)
		})
		return (
			<div className="user_list">
				{(!this.props.users) && (
					<Preloader/>
				)}

				{(this.props.users.length === 0) && (
					<h4>None found</h4>
				)}

				{(this.props.users.length > 0) && (
					<div>
						<ul className="collection">
							{userNodes}
						</ul>
						<button className="btn" onClick={this.props.onRefresh}>Refresh users</button>
					</div>
				)}
			</div>
		)
	}
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	onRefresh: PropTypes.func.isRequired
}

export default UserList

