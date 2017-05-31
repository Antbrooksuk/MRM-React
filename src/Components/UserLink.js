import React, { Component } from "react"
import UserDetails from "./UserDetails"

class UserLink extends Component {
	render() {
		const link = "/user/" + this.props.id
		return (
			<li>
				<a href={link}><UserDetails name={this.props.name} email={this.props.email} key={this.props.id} id={this.props.id} /></a>
			</li>
		)
	}
}
export default UserLink