'use strict';

module.exports = {
    context: __dirname,
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
        ],
        loaders: [
            {test: /\.less$/, loader: 'style!css!less'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
        ]
    },
    devServer: {
        contentBase: './public',
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};
