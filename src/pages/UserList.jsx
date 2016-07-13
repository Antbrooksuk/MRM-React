//******************************
// Load react
import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

//******************************
// Load custom plugins
//import Slider from 'react-slick'

//******************************
// Load any css for this module
//require("../css/slick.scss");

//******************************
// Load assets
//var penguins = require("../images/Penguins.jpg");
//var jellyfish = require("../images/Jellyfish.jpg");

//******************************
// Create component
module.exports = React.createClass({
    render: function() {
        return (
            <ul className="user-list">
                <li><Link to="/users/1">Dan</Link></li>
                <li><Link to="/users/2">Ryan</Link></li>
                <li><Link to="/users/3">Michael</Link></li>
            </ul>
        )
    }
});