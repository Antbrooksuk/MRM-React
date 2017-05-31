import React, { Component } from "react"
import UserLink from "./UserLink"

export default class UserList extends Component {
	render() {
		if(Object.getOwnPropertyNames(this.props.users).length === 0) {
			return (
				<div>
					None
				</div>
			)
		}
		var userNodes = this.props.users.map(function(user){
			return (
				<UserLink name={user.name} email={user.email} key={user.id} id={user.id} />
			)
		})
		return (
			<div>
				{userNodes}
			</div>
		)
	}
}