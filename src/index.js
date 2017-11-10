import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Base from './Base';

const render = Component =>
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);

render(Base);

if (module.hot) {
	module.hot.accept('./Base', () => {
		const NextApp = require('./Base').default;
		render(NextApp);
	});
}
