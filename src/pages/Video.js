import React, { Component } from "react"
import VideoPlayer from "../components/Video"

class VideoPage extends Component {
	render() {
		return (
			<div className="error">
				<div className="row">
					<div className="col s12">
						<h1>Video</h1>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m8">
						<VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing={false} volume={0.5}  />
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
export default VideoPage