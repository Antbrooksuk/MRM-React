import React, { Component } from "react"
import PropTypes from 'prop-types'

// Return the user details
class User extends Component {
	render() {
		return (
			<div className="user_details">
				{this.props.name} - {this.props.email}
			</div>
		)
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
}

export default User