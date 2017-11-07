import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Layouts
import MainLayout from './layout';
// Import Pages
import Home from './Home';
import NotFound from './NotFound';
// Create router with access to store
const AppRouter = store => {
	return (
		<Router>
			<MainLayout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="*" component={NotFound} />
				</Switch>
			</MainLayout>
		</Router>
	);
};
export default AppRouter;
