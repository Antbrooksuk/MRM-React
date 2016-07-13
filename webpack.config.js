var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProd = (process.env.NODE_ENV === 'production');

// Handy Paths
var PATHS = {
    src:    path.join(__dirname, 'src'),
    css:    path.join(__dirname, 'src/css'),
    fonts:  path.join(__dirname, 'src/fonts'),
    images: path.join(__dirname, 'src/images')
};

module.exports = {
    context: __dirname,
    debug: true,
    devtool: "inline-source-map",
    entry: {
        src: isProd ? ['./src/Layout.jsx'] : ['webpack/hot/dev-server', './src/Layout.jsx']
    },
    output: {
        path: "/dist/",
        filename: 'bundle.js',
        publicPath: "/"
    },
    resolve: {
        alias: {}
    },
    module: {
        noParse: [],
        loaders: [
            { 
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }, { 
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract('css!sass'),
                include: [ PATHS.css ]
            }, { 
                test: /\.(eot|svg|ttf|woff|woff2)$/, 
                loader: 'file?name=[name].[hash].[ext]',
                include: [ PATHS.fonts ]
            }, { 
                test: /\.(png|jpg|gif)$/, 
                loaders: ['url?limit=10000&name=img/[name].[hash].[ext]'],
                include: [ PATHS.images ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};