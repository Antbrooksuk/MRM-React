import React, { Component } from 'react';
import Posts from '../components/Posts';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.updatePosts = this.updatePosts.bind(this);
	}

	state = {};

	updatePosts() {
		this.props.dispatch(fetchPosts());
	}

	componentWillMount() {
		if (Object.keys(this.props.posts).length === 0) {
			this.props.dispatch(fetchPosts());
		}
	}

	/*componentWillReceiveProps(nextProps) {
		nextProps;
	}*/

	render = () => {
		var posts = this.props.posts;

		if (this.props.fetched && !this.props.errored) {
			return (
				<div className="home">
					<Posts posts={posts} />
					<button onClick={this.updatePosts}>Update</button>
				</div>
			);
		}

		if (this.props.errored) {
			return (
				<div className="home">
					<h4>Error</h4>
					<p>{this.props.errored}</p>
				</div>
			);
		}

		return (
			<div className="home">
				<p>Loading ... </p>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	dispatch: dispatch
});

const mapStateToProps = store => ({
	posts: store.posts.posts,
	fetched: store.posts.fetched,
	errored: store.posts.errored
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
