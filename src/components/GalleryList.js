import React, { Component } from "react"
import PropTypes from 'prop-types'
import Preloader from "./Preloader"
import Image from 'react-lazy-image';

// List of gallery
class GalleryList extends Component {
	render() {
		var galleryNodes = this.props.gallery.photos.photo.map(function(photo){
			var imageUrl = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg'
			return (
				<div className="gallery-image" key={photo.id}>
					<Image source={imageUrl} />
				</div>
			)
		})
		return (
			<div className="gallery">
				{(!this.props.gallery) && (
					<Preloader/>
				)}

				{(this.props.gallery.length === 0) && (
					<h4>None found</h4>
				)}

				{(Object.keys(this.props.gallery.photos.photo).length !== 0) && (
					<div className="gallery-list">
						{galleryNodes}
					</div>
				)}
			</div>
		)
	}
}

export default GalleryList

