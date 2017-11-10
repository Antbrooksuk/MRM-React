import React, { Component } from 'react';
import Nav from '../Components/Nav';
import { withRouter } from 'react-router-dom';

class Default extends Component {
	render() {
		return (
			<div id="app">
				<header>
					<h1>Example React App</h1>
				</header>
				<Nav loggedIn={false} />
				<main>
					<div className="container">{this.props.children}</div>
				</main>
				<footer>
					<p>&copy; 2017</p>
				</footer>
			</div>
		);
	}
}

export default withRouter(Default);
