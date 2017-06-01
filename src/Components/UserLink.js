import React, { Component } from "react"
import UserDetails from "./UserDetails"
import { Link } from 'react-router-dom'

class UserLink extends Component {
	render() {
		const link = "/user/" + this.props.id
		return (
			<li className="collection-item">
				<Link to={link}><UserDetails name={this.props.name} email={this.props.email} key={this.props.id} id={this.props.id} /></Link>
			</li>
		)
	}
}
export default UserLink