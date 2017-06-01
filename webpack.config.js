var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8000',
		'webpack/hot/only-dev-server',
		'./src/index.js',
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/static/'
	},

	devtool: 'inline-source-map',

	plugins: [

		new webpack.HotModuleReplacementPlugin(),
	    new webpack.NamedModulesPlugin(),
	    new webpack.NoEmitOnErrorsPlugin(),

		/*new webpack.DefinePlugin({ // <-- key to reducing React's size
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),*/
		//new webpack.optimize.UglifyJsPlugin(), //minify everything
		//new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks 

		new ExtractTextPlugin("bundle.css"),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.bundle\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: {removeAll: true } },
			canPrint: true
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
				loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!sass-loader" })
			}
		]
	},

 	devServer: {
	    host: 'localhost',
	    port: 8000,
	    historyApiFallback: true,
	    hot: true
  	}

};