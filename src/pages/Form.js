import React, { Component } from "react"
import { Link } from 'react-router-dom'

class CustomForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			comments: "",
			type: "",
			agree: false,
			name_active: true,
			comments_active: false
		}

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleOnFocus(propertyName, event) {
		this.setState({ 
			[propertyName + "_active"]: true 
		})
	}

	handleOnBlur(propertyName, event) {
		this.setState({ 
			[propertyName + "_active"]: (this.state[propertyName] !== "") 
		})
	}

	handleInputChange(propertyName, event) {
		let value = event.target.value

		switch(event.target.type) {
			case "radio":
				value = event.target.id
				break
			case "checkbox":
				value = event.target.checked
				break
		}

		this.setState({ 
			[propertyName]: value
		})
	}

	handleSubmit(event) {
		console.log('Name:' + this.state.name + "\nComments: " + this.state.comments + "\nType: " + this.state.type+ "\nAgree: " + this.state.agree)
		event.preventDefault()
	}

	render() {

		const nameActive = (this.state.name_active) ? "active" : ""
		const commentsActive = (this.state.comments_active) ? "active" : ""

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="input-field col s12">
						<input 
							autoFocus 
							placeholder="Name:" 
							name="name" 
							className="validate" 
							type="text" 
							value={this.state.name} 
							onChange={this.handleInputChange.bind(this, "name")} 
							onFocus={this.handleOnFocus.bind(this, "name")} 
							onBlur={this.handleOnBlur.bind(this, "name")} 
						/>
						<label htmlFor="name" className={nameActive}>Name:</label>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<textarea 
							name="comments" 
							className="materialize-textarea" 
							value={this.state.comments} 
							onChange={this.handleInputChange.bind(this, "comments")} 
							onFocus={this.handleOnFocus.bind(this, "comments")} 
							onBlur={this.handleOnBlur.bind(this, "comments")} 
						/>
						<label htmlFor="comments" className={commentsActive}>Comments:</label>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<div className="input-field inline">
							<input 
								name="type" 
								type="radio" 
								id="type-red" 
								onChange={this.handleInputChange.bind(this, "type")} 
								onFocus={this.handleOnFocus.bind(this, "type")} 
								onBlur={this.handleOnBlur.bind(this, "type")}
							/>
							<label htmlFor="type-red">Red</label>
						</div>
						<div className="input-field inline">
							<input 
								name="type" 
								type="radio" 
								id="type-blue" 
								onChange={this.handleInputChange.bind(this, "type")} 
								onFocus={this.handleOnFocus.bind(this, "type")} 
								onBlur={this.handleOnBlur.bind(this, "type")}
							/>
							<label htmlFor="type-blue">Blue</label>
						</div>
						<div className="input-field inline">
							<input 
								name="type" 
								type="radio" 
								id="type-yellow" 
								onChange={this.handleInputChange.bind(this, "type")} 
								onFocus={this.handleOnFocus.bind(this, "type")} 
								onBlur={this.handleOnBlur.bind(this, "type")}
							/>
							<label htmlFor="type-yellow">Yellow</label>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<div className="input-field inline">
							<input 
								name="agree" 
								type="checkbox" 
								id="agree" 
								checked={this.state.agree} 
								onChange={this.handleInputChange.bind(this, "agree")} 
								onFocus={this.handleOnFocus.bind(this, "agree")} 
								onBlur={this.handleOnBlur.bind(this, "agree")}
							/>
							<label htmlFor="agree">I agree</label>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input className="btn" type="submit" value="Submit" />
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<Link to='/'>&larr; Home</Link>
					</div>
				</div>
			</form>
		)
	}
}
export default CustomForm
