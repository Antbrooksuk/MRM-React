import React, { Component } from 'react';
import Nav from '../Components/Nav';
import { withRouter } from 'react-router-dom';

class Extra extends Component {
	render() {
		return (
			<div id="app">
				<Nav loggedIn={false} />
				<main>
					<div className="container">{this.props.children}</div>
				</main>
			</div>
		);
	}
}

export default withRouter(Extra);
