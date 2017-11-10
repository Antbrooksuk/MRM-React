import React, { Component } from 'react';
import store from '../Redux/store';
import AppRouter from './router';
import { Provider } from 'react-redux';
import './Base.css';

class Base extends Component {
	render() {
		return <Provider store={store}>{AppRouter(store)}</Provider>;
	}
}

export default Base;
