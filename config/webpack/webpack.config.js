const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.ts',
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
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: __dirname + '/../typescript/tsconfig.json',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
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
        ],
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
};
