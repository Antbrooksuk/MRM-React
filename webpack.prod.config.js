var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

module.exports = {
	entry: [path.resolve(__dirname, 'src', 'index.js')],

	output: {
		path: buildPath,
		filename: 'bundle.js'
	},

	plugins: [
		new BundleAnalyzerPlugin(),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: '"production"' }
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			},
			output: {
				comments: false
			}
		})
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
					{ loader: 'style-loader', options: { sourceMap: false } },
					{
						loader: 'css-loader',
						options: { sourceMap: false, importLoaders: 1 }
					},
					{ loader: 'postcss-loader', options: { sourceMap: false } },
					{ loader: 'sass-loader', options: { sourceMap: false } }
				]
			}
		]
	}
};
