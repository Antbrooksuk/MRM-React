import React, { Component } from "react"

class User extends Component {
	render() {
		return (
			<div className="user_details">
				{this.props.name} - {this.props.email}
			</div>
		)
	}
}
export default User