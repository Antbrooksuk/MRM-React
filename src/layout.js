import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Main extends Component {
	componentWillMount() {}

	componentDidUpdate() {}

	render() {
		return (
			<div id="app">
				<header>
					<h1>Example React App</h1>
				</header>
				<main>{this.props.children}</main>
				<footer>
					<p>&copy; 2017</p>
				</footer>
			</div>
		);
	}
}

export default withRouter(Main);
