const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {
    config.mode = mode.toLowerCase();

    config.devServer = {
        quiet: true,
        host: '0.0.0.0',
        stats: {
            chunks: false,
            assets: false,
            modules: false,
            version: false,
            hash: false,
            entrypoints: false,
            builtAt: false,
        },
    };

    config.devtool = 'source-map';

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.json');

    // loaders
    config.module.rules = [
        {
            test: /\.tsx?$/,
            loader: 'babel-loader',
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                configFile: path.join(__dirname, '/../tsconfig.json'),
            },
        },
        {
            test: /\.css$/,
            use: 'css-loader',
        },
        {
            test: /^.*(?<!\.color)\.svg$/,
            loader: 'svg-inline-loader',
            options: {
                removeTags: true,
                removingTags: ['title', 'desc', 'defs', 'style'],
                removingTagAttrs: ['class'],
            },
        },
        {
            test: /\.color\.svg$/,
            loader: 'svg-inline-loader',
            options: {
                classPrefix: true,
                removeTags: false,
            },
        },
    ];

    // plugins
    config.plugins.push(
        new FriendlyErrorsWebpackPlugin(),
        new webpack.DefinePlugin({
            ICON_FILES: JSON.stringify(fs.readdirSync(path.join('src', 'assets', 'icons'))),
            ILLUSTRATION_FILES: JSON.stringify(fs.readdirSync(path.join('src', 'assets', 'illustrations'))),
        }),
    );

    return config;
};
