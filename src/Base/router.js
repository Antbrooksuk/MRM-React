import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Layouts
import DefaultLayout from '../Layouts/Default';
import ExtraLayout from '../Layouts/Extra';
// Import Pages
import Home from '../Pages/Home';
import Posts from '../Pages/Posts';
import Map from '../Pages/Map';
import NotFound from '../Pages/NotFound';
// Create router with access to store
const AppRouter = store => {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<DefaultLayout>
							<Home />
						</DefaultLayout>
					)}
				/>
				<Route
					exact
					path="/posts"
					render={() => (
						<DefaultLayout>
							<Posts />
						</DefaultLayout>
					)}
				/>
				<Route
					exact
					path="/map"
					render={() => (
						<DefaultLayout>
							<Map />
						</DefaultLayout>
					)}
				/>
				<Route
					path="*"
					render={() => (
						<ExtraLayout>
							<NotFound />
						</ExtraLayout>
					)}
				/>
			</Switch>
		</Router>
	);
};
export default AppRouter;
