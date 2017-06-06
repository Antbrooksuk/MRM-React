import React, {Component} from 'react'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'

class Main extends Component {
	render() {
		const active = this.props.location.pathname.split("/")[1]
		return (
			<div id="app">
				<header>
					<div className="navbar-fixed">
						<nav className="nav-extended">
							<div className="container">
								<div className="nav-wrapper">
									<Link to='/' className="brand-logo">Logo</Link>
									<ul id="nav-mobile" className="right">
										<li className={(active === "users" || active === "user") ? "active": ""}><Link to='/users'>Users</Link></li>
										<li className={(active === "form") ? "active": ""}><Link to='/form'>Form</Link></li>
										<li className={(active === "contact") ? "active": ""}><Link to='/contact'>Contact</Link></li>
										<li className={(active === "article") ? "active": ""}><Link to='/article/asd'>Article</Link></li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</header>
				<main>
					<div className="container">
						{this.props.children}
					</div>
				</main>
				<footer>
					<div className="container">
						<div className="row">
							<div className="col s12">
								&copy;copy
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
	}
}

export default withRouter(Main)
