import React, { Component } from "react"
import PropTypes from 'prop-types'
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

				{(Object.keys(this.props.gallery.photos.photo).length === 0) && (
					<p>None found</p>
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

