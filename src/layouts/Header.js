import React, { Component } from "react"
import { Link } from 'react-router-dom'

// Preloader reusable component
class Header extends Component {
	render() {
		return (
			<header>
				<nav className="nav-extended">
					<div className="container">
						<div className="nav-wrapper">
							<Link to='/' className="brand-logo">Logo</Link>
							<ul id="nav-mobile" className="right">
								<li className={(this.props.active === "users" || this.props.active === "user") ? "active": ""}><Link to='/users'>Users</Link></li>
								<li className={(this.props.active === "form") ? "active": ""}><Link to='/form'>Form</Link></li>
								<li className={(this.props.active === "contact") ? "active": ""}><Link to='/contact'>Contact</Link></li>
								<li className={(this.props.active === "article") ? "active": ""}><Link to='/article/asd'>Article</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		)
	}
}

export default Header

