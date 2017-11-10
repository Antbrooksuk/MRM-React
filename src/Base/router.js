import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Layouts
import MainLayout from './layout';
// Import Pages
import Home from '../Pages/Home';
import Posts from '../Pages/Posts';
import Map from '../Pages/Map';
import NotFound from '../Pages/NotFound';
// Create router with access to store
const AppRouter = store => {
	return (
		<Router>
			<MainLayout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/posts" component={Posts} />
					<Route exact path="/map" component={Map} />
					<Route path="*" component={NotFound} />
				</Switch>
			</MainLayout>
		</Router>
	);
};
export default AppRouter;
