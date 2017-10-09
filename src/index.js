import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import 'babel-polyfill';

const render = Component =>
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);

render(App);

if (module.hot) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		render(NextApp);
	});
}
