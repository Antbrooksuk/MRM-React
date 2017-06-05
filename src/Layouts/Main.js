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
									<Link to='/' data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
									<ul id="nav-mobile" className="right hide-on-med-and-down">
										<li className={(active === "users" || active === "user") ? "active": ""}><Link to='/users'>Users</Link></li>
										<li className={(active === "form") ? "active": ""}><Link to='/form'>Form</Link></li>
										<li className={(active === "map") ? "active": ""}><Link to='/map'>Map</Link></li>
									</ul>
									<ul className="side-nav" id="mobile-demo">
										<li className={(active === "users" || active === "user") ? "active": ""}><Link to='/users'>Users</Link></li>
										<li className={(active === "form") ? "active": ""}><Link to='/form'>Form</Link></li>
										<li className={(active === "map") ? "active": ""}><Link to='/map'>Map</Link></li>
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
