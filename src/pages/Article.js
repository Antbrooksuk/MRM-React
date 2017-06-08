import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Image from 'react-lazy-image';
import Preloader from "../components/Preloader"
import VideoPlayer from "../components/Video"
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
				<div key={article.id}>
					<h1>{article.title}</h1>

					{Object.keys(article.content).map(function(key) {
						if(article.content[key].type === "intro") {
							return (
								<p key={key}>{article.content[key].content}</p>
							)
						}
						if(article.content[key].type === "content") {
							return (
								<p key={key}>{article.content[key].content}</p>
							)
						}
						if(article.content[key].type === "subtitle") {
							return (
								<h4 key={key}>{article.content[key].content}</h4>
							)
						}
						if(article.content[key].type === "image") {
							return (
								<Image key={key} source={article.content[key].content} />
							)
						}
						if(article.content[key].type === "video") {
							return (
								<VideoPlayer key={key} url={article.content[key].content} playing={false} volume={0.5}  />
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