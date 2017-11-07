var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
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

	devtool: 'cheap-module-eval-source-map',

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: [
					{ loader: 'style-loader', options: { sourceMap: true } },
					{
						loader: 'css-loader',
						options: { sourceMap: true, importLoaders: 1 }
					},
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
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
