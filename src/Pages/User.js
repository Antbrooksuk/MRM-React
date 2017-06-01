import React, { Component } from "react"
import {connect} from "react-redux"
import UserDetails from "../components/UserDetails"
import PostList from "../components/PostsList"
import {fetchUser} from "../actions"
import { Link } from 'react-router-dom'

class User extends Component {

	componentWillMount(){
		this.props.dispatch(fetchUser({ id: this.props.match.params.id }))
	}

	render() {
		if(!this.props.user || this.props.fetching) {
			return (
				<div className="user">
					<div className="row">
						<div className="col s12">
							<h1>User details</h1>
							<div className="preloader-wrapper small active">
								<div className="spinner-layer spinner-green-only">
									<div className="circle-clipper left">
										<div className="circle"></div>
									</div>
									<div className="gap-patch">
										<div className="circle"></div>
									</div>
									<div className="circle-clipper right">
										<div className="circle"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<Link to='/users'>&larr; Users</Link>
						</div>
					</div>
				</div>
			)
		} else if(this.props.user.length === 0) {
			return (
				<div className="user">
					<div className="row">
						<div className="col s12">
							<h1>User details</h1>
							<p>None found</p>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<Link to='/users'>&larr; Users</Link>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className="user">
				<div className="row">
					<div className="col s12">
						<h1>User details</h1>
						<UserDetails name={this.props.user.name} email={this.props.user.email} id={this.props.user.id} />
						<h4>Posts by {this.props.user.name}</h4>
						<PostList name={this.props.user.name} id={this.props.user.id} />
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<Link to='/users'>&larr; Users</Link>
					</div>
				</div>
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