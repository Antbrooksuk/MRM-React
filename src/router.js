import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Import Layouts
import Main from "./layouts/Main"
// Import Pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Video from "./pages/Video"
import Article from "./pages/Article"
import Users from "./pages/Users"
import CustomForm from "./pages/Form"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
// Create router with access to store
const AppRouter = store => {
	return (
		<Router>
			<Main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/video" component={Video} />
					<Route exact path="/users" component={Users} />
					<Route exact path="/article/:id" component={Article} />
					<Route exact path="/form" component={CustomForm} />
					<Route exact path="/user/:id" component={User} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Main>
		</Router>
	)
}
export default AppRouter
