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
            <div class="extra">
                <div className="extra-header container">
                    [ Extra layout, eg search controls ]
                </div>
                <div className="extra-wrapper container">
                    { this.props.children }
                </div>
                <div className="extra-footer container">
                    [ Pagination ]
                </div>
            </div>
        )
    }
});