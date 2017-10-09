import React, { Component } from 'react';
import store from './store';
import AppRouter from './router';
import { Provider } from 'react-redux';
import './SCSS/main.css';

class App extends Component {
	render = () => {
		return <Provider store={store}>{AppRouter(store)}</Provider>;
	};
}

export default App;
