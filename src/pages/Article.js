import React, { Component } from "react"
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load';

class Article extends Component {
	render() {
		return (
			<div className="article">
				<div className="row">
					<div className="col s12 m8">
						<h1>Page intro title</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci delectus libero corrupti, quae. Nulla, perspiciatis. Minima quo libero facilis officiis, dolorem explicabo voluptates expedita est voluptatibus recusandae cum repudiandae.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, accusantium suscipit officia repellat culpa facere harum iure nisi. Error eius porro, sed veritatis velit culpa eaque quaerat alias molestiae saepe?</p>
						<LazyLoad height={480}>
							<img src="/images/ph.jpg" />
						</LazyLoad>
						<h4>Ipsum</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci delectus libero corrupti, quae. Nulla, perspiciatis. Minima quo libero facilis officiis, dolorem explicabo voluptates expedita est voluptatibus recusandae cum repudiandae.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, accusantium suscipit officia repellat culpa facere harum iure nisi. Error eius porro, sed veritatis velit culpa eaque quaerat alias molestiae saepe?</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, accusantium suscipit officia repellat culpa facere harum iure nisi. Error eius porro, sed veritatis velit culpa eaque quaerat alias molestiae saepe?</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, accusantium suscipit officia repellat culpa facere harum iure nisi. Error eius porro, sed veritatis velit culpa eaque quaerat alias molestiae saepe?</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, accusantium suscipit officia repellat culpa facere harum iure nisi. Error eius porro, sed veritatis velit culpa eaque quaerat alias molestiae saepe?</p>
					</div>
					<div className="col s12 m4">
						<aside>
							<h4>Lorem</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci delectus libero corrupti, quae. Nulla, perspiciatis. Minima quo libero facilis officiis, dolorem explicabo voluptates expedita est voluptatibus recusandae cum repudiandae.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, accusantium suscipit officia repellat culpa facere harum iure nisi. Error eius porro, sed veritatis velit culpa eaque quaerat alias molestiae saepe?</p>
						</aside>
					</div>
				</div>
			</div>
		)
	}
}
export default Article