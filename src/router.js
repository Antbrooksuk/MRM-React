import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Import Layouts
import Main from "./Layouts/Main"
// Import Pages
import Home from "./Pages/Home"
import Users from "./Pages/Users"
import User from "./Pages/User"
import NotFound from "./Pages/NotFound"
// Create router with access to store
const AppRouter = store => {
	return (
		<Router>
	        <Main>
	            <Switch>
	                <Route exact path="/" component={Home} />
	                <Route exact path="/users" component={Users} />
                    <Route exact path="/user/:id" component={User} />
                    <Route path="*" component={NotFound} />
	            </Switch>
	        </Main>
	    </Router>
	)
}
export default AppRouter;
