import React, {Component} from 'react';
import {withRouter} from 'react-router';

class Main extends Component {
	render() {
		return (
			<div id="app">
				<header>
					<div className="container">
						<div className="row">
							<div className="col s12">
								MRM React
							</div>
						</div>
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
