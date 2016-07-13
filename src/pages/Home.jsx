//******************************
// Load react
import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

//******************************
// Load custom plugins
import Slider from 'react-slick'

//******************************
// Load any css for this module
require("../css/slick.scss");

//******************************
// Load assets
var penguins = require("../images/Penguins.jpg");
var jellyfish = require("../images/Jellyfish.jpg");

//******************************
// Create component
module.exports = React.createClass({
    getInitialState: function(){
        // Invoked once before the component is mounted. 
        return {
            data: []
        }
    },
    getDefaultProps: function(){
        // Invoked once and cached when the class is created.
    },
    componentWillMount: function() {
        // Invoked once, both on the client and server, immediately before the initial rendering occurs. 

        /* Load data 
        $.get(this.props.url, function (data) {
            this.setState(data);
        }.bind(this));
        */
    },
    componentDidMount: function() {
        // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    },
    render: function() {
        // Main display function
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="container">
                <h2>Home Page</h2>
                <p>Welcome to MRM React</p>
                <Slider {...settings} data={this.state.data}>
                    <div><img src={ penguins } /></div>
                    <div><img src={ jellyfish } /></div>
                </Slider>
            </div>
        )
    },
    componentWillUnmount: function(){
        // Invoked before DOM removal
    }
});