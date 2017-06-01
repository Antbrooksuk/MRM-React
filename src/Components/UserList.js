import React, { Component } from "react"
import PropTypes from 'prop-types'
import UserLink from "./UserLink"

class UserList extends Component {
	render() {
		if(!this.props.users) {
			return (
				<div className="user_list">
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
				<ul className="collection">
					{userNodes}
				</ul>
				<button className="btn" onClick={this.props.onRefresh}>Refresh users</button>
			</div>
		)
	}
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	onRefresh: PropTypes.func.isRequired
}

export default UserList

