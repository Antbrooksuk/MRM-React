import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Import Layouts
import Main from "./layouts/Main"
// Import Pages
import Home from "./pages/Home"
import Map from "./pages/Map"
import Users from "./pages/Users"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
// Create router with access to store
const AppRouter = store => {
	return (
		<Router>
	        <Main>
	            <Switch>
	                <Route exact path="/" component={Home} />
	                <Route exact path="/map" component={Map} />
	                <Route exact path="/users" component={Users} />
                    <Route exact path="/user/:id" component={User} />
                    <Route path="*" component={NotFound} />
	            </Switch>
	        </Main>
	    </Router>
	)
}
export default AppRouter
