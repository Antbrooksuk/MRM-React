import React, { Component } from "react"
import UserDetails from "./UserDetails"

export default class UserLink extends Component {
	render() {
		const link = "/user/" + this.props.id
		return (
			<div>
				<a href={link}><UserDetails name={this.props.name} email={this.props.email} key={this.props.id} id={this.props.id} /></a>
			</div>
		)
	}
}