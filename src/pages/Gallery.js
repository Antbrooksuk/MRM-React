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

	redrawGallery(page){
		this.props.dispatch(fetchImages({ page: page }))
	}

	render() {
		var currentPage = parseInt(this.props.match.params.page || 1, 10)
		var prevPage = "/gallery/" + (currentPage-1)
		var nextPage = "/gallery/" + (currentPage+1)
		return (
			<div className="gallery">
				<h1>Gallery</h1>

				{(!this.props.gallery || this.props.fetching) && (
					<Preloader/>
				)}

				{(!this.props.gallery && !this.props.fetching) && (
					<p>None found</p>
				)}

				{(Object.keys(this.props.gallery).length !== 0) && (
					<div>
						<ul className="pagination">
				    		<li>
								<Link to={prevPage} onClick={this.redrawGallery.bind(this, (currentPage-1))}>&larr;Prev</Link>
					    	</li>
						    <li className="active"><a>Page {currentPage}</a></li>
			    			<li>
			    				<Link to={nextPage} onClick={this.redrawGallery.bind(this, (currentPage+1))}>Next&rarr;</Link>
					    	</li>
						  </ul>

						<GalleryList gallery={this.props.gallery} />
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
	gallery: store.gallery.gallery,
	fetching: store.users.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)