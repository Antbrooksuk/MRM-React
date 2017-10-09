var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8000',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		pathinfo: true,
		publicPath: '/'
	},

	devtool: 'source-map',

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [
						'react',
						['es2015', { modules: false }],
						'stage-0'
					]
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},

	devServer: {
		host: 'localhost',
		port: 8000,
		contentBase: path.join(__dirname, 'public'),
		publicPath: '/',
		openPage: '',
		historyApiFallback: true,
		hot: true,
		open: true
	}
};
