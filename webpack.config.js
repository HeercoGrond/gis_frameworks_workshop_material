const path = require('path');

const webpack = require('webpack');

const config = {
    context: __dirname,
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist/')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.(png|gif|jpg|jpeg|svg)$/,
            use: [ 'url-loader' ]
        }]
    },
    watch: true
}

module.exports = config;