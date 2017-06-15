var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build', 'static');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	}
};

