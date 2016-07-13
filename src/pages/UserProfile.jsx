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
            <div className="container profile">
                <h2>Anthony</h2>
                <p>Pellentesque hendrerit dignissim ligula, et interdum erat scelerisque ac. Nam nec tincidunt mauris. Curabitur tristique at dolor in hendrerit. Nullam eu quam egestas, lobortis augue sit amet, ullamcorper elit. Morbi vel lectus felis. Nam eros risus, placerat eu lectus eu, bibendum mattis nisi. In hac habitasse platea dictumst. Aliquam condimentum mauris eget est iaculis accumsan. Nunc purus nunc, lacinia ut gravida vel, fringilla vitae arcu. Aliquam sed lacus est. Nunc imperdiet, metus et faucibus porta, turpis metus blandit quam, vel tempor mauris elit quis justo. In in leo sit amet velit ornare fermentum.</p>
                <p><Link to="/users">Back to Users</Link></p>
            </div>
        )
    }
});
