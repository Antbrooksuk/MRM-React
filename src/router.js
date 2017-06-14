import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Import Layouts
import MainLayout from "./layouts/Main"
// Import Pages
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Article from "./pages/Article"
import Users from "./pages/Users"
import Contact from "./pages/Contact"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
// Create router with access to store
const AppRouter = store => {
	return (
		<Router>
			<MainLayout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={Contact} />
					<Route path="/gallery/:page?" component={Gallery} />
					<Route exact path="/users" component={Users} />
					<Route exact path="/users/:id" component={User} />
					<Route exact path="/article/:id" component={Article} />
					<Route path="*" component={NotFound} />
				</Switch>
			</MainLayout>
		</Router>
	)
}
export default AppRouter
