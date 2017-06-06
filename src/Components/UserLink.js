import React, { Component } from "react"
import PropTypes from 'prop-types'
import UserDetails from "./UserDetails"
import { Link } from 'react-router-dom'

// Returns the user link
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

UserLink.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}

export default UserLink