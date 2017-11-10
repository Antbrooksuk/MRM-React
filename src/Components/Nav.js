import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const propTypes = {
	loggedIn: PropTypes.bool.isRequired
};

const defaultProps = {
	loggedIn: false
};

class Nav extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<NavLink exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/posts">
							Posts
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/map">
							Map
						</NavLink>
					</li>
					{this.props.loggedIn && (
						<li>
							<NavLink exact to="/logout">
								Logout
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		);
	}
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
