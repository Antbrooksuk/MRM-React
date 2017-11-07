import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	id: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
	text: PropTypes.string
};

const defaultProps = {
	text: 'Hello World'
};

class Link extends Component {
	// Static methods
	static methodsAreOk() {
		return true;
	}
	// Constructor
	constructor(props) {
		super(props);
	}
	// Component functions
	componentWillMount() {}
	componentDidMount() {}
	componentWillReceiveProps(nextProps) {}
	componentWillUpdate() {}
	componentDidUpdate(prevProps, prevState) {}
	componentWillUnmount() {}
	// Click Handlers, event handlers
	onClickHandler() {}
	// Render
	render() {
		return (
			<a href={this.props.url} data-id={this.props.id}>
				{this.props.text}
			</a>
		);
	}
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
