import React, { Component } from "react"
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load';
import Preloader from "../components/Preloader"
import {connect} from "react-redux"
import {fetchArticle} from "../actions"

class Article extends Component {

	componentWillMount() {
		// Fetch page data
		this.props.dispatch(fetchArticle({ id: this.props.match.params.id }))
	}

	render() {
		var articleNodes = this.props.article.map(function(article){
			return (
				<div>
					<h1>{article.title}</h1>

					{Object.keys(article.content).map(function(key) {
						if(article.content[key][0] === "intro") {
					    	return (
					    		<p>{article.content[key][1]}</p>
					    	)
						}
						if(article.content[key][0] === "content") {
					    	return (
					    		<p>{article.content[key][1]}</p>
					    	)
						}
						if(article.content[key][0] === "image") {
					    	return (
					    		<LazyLoad height={480}>
									<img src={article.content[key][1]} />
								</LazyLoad>
							)
						}
					})}

				</div>
			)
		})
		return (
			<div className="article">
				<div className="row">
					<div className="col s12 m8">

						{(this.props.fetching) && (
							<Preloader />
						)}

						{articleNodes}

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

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	article: store.article.article,
	fetching: store.article.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)