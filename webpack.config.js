// @remove-on-eject-end
'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        publicPath: '/',
        filename: 'js/bundle.[hash:8].js',
        chunkFilename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: false
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: ['./dist/build', './src'],
        hot: true,
        historyApiFallback: true,
        disableHostCheck: true,
        host: '0.0.0.0',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            'actions': path.join(__dirname, 'src', 'actions'),
            'components': path.join(__dirname, 'src', 'components'),
            'pages': path.join(__dirname, 'src', 'pages'),
            'reducers': path.join(__dirname, 'src', 'reducers'),
            'services': path.join(__dirname, 'src', 'services'),
            'utils': path.join(__dirname, 'src', 'utils'),
            'modules': path.join(__dirname, 'src', 'modules'),
        }
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                extensions: ['', '.d.ts', '.ts', '.tsx', '.js']
            }
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist/build'],
            verbose: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            //analyzerMode: 'server',
            analyzerPort: 8888
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};
