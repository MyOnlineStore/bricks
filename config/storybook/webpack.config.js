const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (baseConfig, env, config) => {
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
            loader: 'ts-loader',
            options: {
                configFile: __dirname + '/../typescript/tsconfig.json',
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
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ];
    // plugins

    config.plugins.push(new FriendlyErrorsWebpackPlugin());

    return config;
};
