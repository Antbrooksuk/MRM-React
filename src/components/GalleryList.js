import React, { Component } from "react"
import PropTypes from 'prop-types'
import Image from 'react-lazy-image';

// List of gallery
class GalleryList extends Component {
	render() {
		let galleryItems = [1,2,3,4,5,6,7,8];
		let galleryNodes = galleryItems.map(function(photo){
			return (
				<div className="gallery-image" key={photo}></div>
			)
		})

		if(Object.keys(this.props.gallery).length) {
			galleryItems = this.props.gallery.photos.photo;
			galleryNodes = galleryItems.map(function(photo){
				const imageUrl = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg'
				return (
					<div className="gallery-image" key={photo.id}>
						<Image source={imageUrl} />
					</div>
				)
			})
		} 

		return (
			<div className="gallery">

				{(!galleryItems.length) && (
					<p>None found</p>
				)}

				<div className="gallery-list">
					{galleryNodes}
				</div>
			</div>
		)
	}
}

export default GalleryList

