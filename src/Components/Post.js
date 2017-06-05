import React, { Component } from "react"
import LazyLoad from 'react-lazy-load';

class Post extends Component {
	render() {
		return (
				<li className="collection-item">
					<h4>{this.props.title}</h4>
					<p>{this.props.body}</p>
					<LazyLoad height={480}>
						<img src="/images/ph.jpg" />
					</LazyLoad>
				</li>
		)
	}
}
export default Post