import React, { Component } from "react"
import { Link, NavLink } from 'react-router-dom'

// Preloader reusable component
class Header extends Component {
	render() {
		return (
			<header>
				<nav className="nav-extended">
					<div className="container">
						<div className="nav-wrapper">
							<NavLink to='/' className="brand-logo">Logo</NavLink>
							<ul id="nav-mobile" className="right">
								<li><NavLink activeClassName="active" to='/users'>Users</NavLink></li>
								<li><NavLink activeClassName="active" to='/form'>Form</NavLink></li>
								<li><NavLink activeClassName="active" to='/gallery'>Gallery</NavLink></li>
								<li><NavLink activeClassName="active" to='/contact'>Contact</NavLink></li>
								<li><NavLink activeClassName="active" to='/article/asd'>Article</NavLink></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}

export default Header

