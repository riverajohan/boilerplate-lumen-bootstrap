const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './public/js'),
    entry: {
        app: ['./main.js'],
    },
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'js/lib')
                ],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }]
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, './public/sass'),
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                    ]
                })
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new OptimizeCssAssetsPlugin()
    ]
};