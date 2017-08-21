var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public');
var mainPath = path.resolve(__dirname, 'src', 'index.js');

module.exports = {

	entry: ["babel-polyfill", mainPath],

	output: {
		path: buildPath,
		filename: 'bundle.js'
	},
	
	devtool: 'cheap-module-source-map',

	plugins: [
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			comments: false,
			sourceMap: true,
			minimize: false
		})
	],

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

