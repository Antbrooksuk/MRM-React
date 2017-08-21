import React, {Component} from 'react'
import { connect } from "react-redux"
import { checkUser } from "./redux/actions"
import { withRouter } from 'react-router-dom'

class Main extends Component {

	componentWillMount() {
		
	}

	componentDidUpdate() {

	}

	render = () => {
		return (
			<div id="app">
				<header>
					<h1>Example React App</h1>
				</header>
				<main>
					{this.props.children}
				</main>
				<footer>
					<p>&copy; 2017</p>
				</footer>	
			</div>
		)
	}
}

const mapStateToProps = (store) => ({
	user: store.current_user.current_user
})

export default withRouter(connect(mapStateToProps, null)(Main))

