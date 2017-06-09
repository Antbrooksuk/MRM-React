import React, {Component} from 'react'
import {withRouter} from 'react-router'
import Header from './Header'
import Footer from './Footer'
import LoadingBar from 'react-redux-loading-bar'

class Main extends Component {
	render() {
		const active = this.props.location.pathname.split("/")[1]
		return (
			<div id="app">
				<LoadingBar showFastActions progressIncrease={25} className="loading" />
				<Header active={active} />
				<main>
					<div className="container">
						<div className="row">
							<div className="col s12 m8">
								{this.props.children}
							</div>
							<div className="col s12 m4">
								<aside>
									<h4>Lorem</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci delectus libero corrupti, quae. Nulla, perspiciatis. Minima quo libero facilis officiis, dolorem explicabo voluptates expedita est voluptatibus recusandae cum repudiandae.</p>
								</aside>
								<aside>
									<h4>Lorem</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci delectus libero corrupti, quae. Nulla, perspiciatis. Minima quo libero facilis officiis, dolorem explicabo voluptates expedita est voluptatibus recusandae cum repudiandae.</p>
								</aside>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		)
	}
}

export default withRouter(Main)
