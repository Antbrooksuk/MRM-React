import React, { Component } from 'react';
import './Home.css';

class HomePage extends Component {
	render() {
		return (
			<div className="home">
				<h1>Hello</h1>
				<p>Some react plugins to look at:</p>
				<ul>
					<li>
						<a
							href="https://github.com/neptunian/react-photo-gallery"
							target="_blank"
						>
							Photo Gallery
						</a>
					</li>
					<li>
						<a
							href="https://github.com/negomi/react-burger-menu"
							target="_blank"
						>
							Burger menu
						</a>
					</li>
					<li>
						<a
							href="https://github.com/airbnb/react-dates"
							target="_blank"
						>
							Date picker
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default HomePage;
