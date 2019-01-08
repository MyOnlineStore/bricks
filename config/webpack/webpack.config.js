const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBar = require('webpackbar');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    devtool: 'source-map',
    stats: {
        assets: true,
        modules: false,
        children: false,
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/../../dist',
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                    plugins: [['babel-plugin-styled-components']],
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    onlyCompileBundledFiles: true,
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
        ],
    },
    plugins: [
        new PeerDepsExternalsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new WebpackBar(),
        new Visualizer({
            filename: '../reports/webpack/statistics-circle.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../reports/webpack/statistics-tree.html',
        }),
    ],
};
