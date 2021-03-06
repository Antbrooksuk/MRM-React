import React, { Component } from 'react';
import Posts from '../Components/PostsList';
import { connect } from 'react-redux';
import { fetchPosts } from '../Redux/actions';
import './Posts.css';

class PostsPage extends Component {
	constructor(props) {
		super(props);
		this.loadPosts = this.loadPosts.bind(this);
	}

	state = {
		offset: 0,
		postsPerPage: 10,
		pageCount: 10
	};

	loadPosts() {
		this.props.dispatch(fetchPosts(this.state.offset));
	}

	componentDidMount() {
		if (Object.keys(this.props.posts).length === 0) {
			this.loadPosts();
		}
	}

	handlePageClick = data => {
		let selected = data.selected;
		let offset = Math.ceil(selected * this.state.postsPerPage);

		this.setState({ offset: offset }, () => {
			this.loadPosts();
		});
	};

	render() {
		var { posts } = this.props,
			view,
			pagination;

		if (this.props.fetched && !this.props.errored) {
			view = (
				<div>
					<Posts posts={posts} />
				</div>
			);
		}

		if (this.props.errored) {
			view = (
				<div>
					<h4>Error</h4>
					<p>{this.props.errored}</p>
				</div>
			);
		}

		return <div className="home">{view}</div>;
	}
}

const mapDispatchToProps = dispatch => ({
	dispatch: dispatch
});

const mapStateToProps = store => ({
	posts: store.posts.posts,
	fetched: store.posts.fetched,
	errored: store.posts.errored
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
