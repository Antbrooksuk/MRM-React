//******************************
// Load react
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

//******************************
// Load custom plugins
//import Slider from 'react-slick'

//******************************
// Load the main css for this module
require("./css/style.scss");

//******************************
// Load assets
//var penguins = require("../images/Penguins.jpg");
//var jellyfish = require("../images/Jellyfish.jpg");

//******************************
// Create component
var MainLayout = React.createClass({
    render: function() {
        return (
            <div className="app">
                <header>
                    <div className="container">
                        <h1><Link to="/">MRM React</Link></h1>
                        <nav>
                            <ul>
                                <li><Link activeClassName="active" to="/users">Users</Link></li>
                                <li><Link activeClassName="active" to="/widgets">Widgets</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <div className="container">
                        MRM React
                    </div>
                </footer>
            </div>
        )
    }
});

var Home = require('./pages/Home.jsx');
var UserList = require('./pages/UserList.jsx');
var ExtraLayout = require('./pages/ExtraLayout.jsx');
var UserProfile = require('./pages/UserProfile.jsx');
var WidgetList = require('./pages/WidgetList.jsx');

// Note that with how CodePen works, I wasn't able to get the browserHistory to work
// as the article suggests. The demo works without it, but you'll want to be sure to 
// use it in a real application
render((
    //<Router history={browserHistory}>
    //<Router history={hashHistory}>
    <Router history={hashHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home} />
            <Route path="users/:userId" component={UserProfile} />
            <Route component={ExtraLayout}>
                <Route path="users" component={UserList} />
                <Route path="widgets" component={WidgetList} />
            </Route> 
        </Route>
    </Router>
), document.getElementById('root'));

