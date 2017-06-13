import React, { Component } from "react"
import {connect} from "react-redux"
import GalleryList from "../components/GalleryList"
import Preloader from "../components/Preloader"
import {fetchImages} from "../actions"
import { Link } from 'react-router-dom'

class Gallery extends Component {

	componentWillMount(){
		this.props.dispatch(fetchImages({ page: this.props.match.params.page || 1 }))
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.location.pathname != this.props.location.pathname) {
			this.props.dispatch(fetchImages({ page: this.props.match.params.page || 1 }))
		}
	}

	render() {
		var currentPage = parseInt(this.props.match.params.page || 1, 10)
		var prevPage = "/gallery/" + (currentPage-1)
		var nextPage = "/gallery/" + (currentPage+1)

		let prevButton, nextButton = null
		
		if((currentPage-1) > 0) {
			prevButton = <li>
				<Link to={prevPage}>&larr; Prev</Link>
			</li>
		}

		if(Object.keys(this.props.gallery).length !== 0) {
			if(this.props.gallery.photos.photo.length === 8) {
				nextButton = <li>
					<Link to={nextPage}>Next &rarr;</Link>
				</li>
			}
		}	

		let pagination = <ul className="pagination">
			{prevButton}
			<li className="active"><a>Page {currentPage}</a></li>
			{nextButton}
		</ul>

		return (
			<div className="gallery">
				<h1>Gallery</h1>

				{(!this.props.gallery || this.props.fetching) && (
					<Preloader/>
				)}

				{pagination}

				<GalleryList gallery={this.props.gallery} />

				{pagination}

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

const mapStateToProps = (store) => ({
	gallery: store.gallery.gallery,
	fetching: store.users.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)