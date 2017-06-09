import React, { Component } from "react"
import UserDetails from "../components/UserDetails"
import PostList from "../components/PostsList"
import Preloader from "../components/Preloader"
import {connect} from "react-redux"
import {fetchUser} from "../actions"
import { Link } from 'react-router-dom'

class User extends Component {

	componentWillMount(){
		this.props.dispatch(fetchUser({ id: this.props.match.params.id }))
	}

	render() {
		return (
			<div className="user">
				<h1>User details</h1>

				{(!this.props.user || this.props.fetching) && (
					<Preloader/>
				)}

				{(!this.props.user && !this.props.fetching) && (
					<p>Not found</p>
				)}

				{(Object.keys(this.props.user).length !== 0) && (
					<div>
						<UserDetails name={this.props.user.name} email={this.props.user.email} id={this.props.user.id} />
						<h4>Posts by {this.props.user.name}</h4>
						<PostList name={this.props.user.name} id={this.props.user.id} />
					</div>
				)}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	user: store.user.user,
	fetching: store.user.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(User)