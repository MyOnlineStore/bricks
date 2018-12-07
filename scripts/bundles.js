const webpack = require('webpack');
const entry = require('./entry');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const configureBabelLoader = browserlist => {
    return {
        test: /\.tsx?$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        'env',
                        {
                            debug: true,
                            modules: false,
                            useBuiltIns: true,
                            targets: {
                                browsers: browserlist,
                            },
                        },
                    ],
                ],
                plugins: [
                    [
                        'babel-plugin-styled-components',
                        {
                            ssr: true,
                        },
                    ],
                ],
            },
        },
    };
};

const baseConfig = {
    devtool: 'source-map',
    entry,
    stats: {
        assets: true,
        modules: false,
        children: false,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'env/',
            minChunks: 2,
        }),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new PeerDepsExternalsPlugin(),
    ],
};

const modernConfig = Object.assign({}, baseConfig, {
    output: {
        filename: '[name]modern.js',
        path: __dirname + '/../lib',
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            configureBabelLoader([
                // The last two versions of each browser, excluding versions
                // that don't support <script type="module">.
                'last 2 Chrome versions',
                'not Chrome < 60',
                'last 2 Safari versions',
                'not Safari < 10.1',
                'last 2 iOS versions',
                'not iOS < 10.3',
                'last 2 Firefox versions',
                'not Firefox < 54',
                'last 2 Edge versions',
                'not Edge < 15',
            ]),
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    onlyCompileBundledFiles: true,
                    configFile: __dirname + '/../config/typescript/tsconfig.json',
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
        ],
    },
    plugins: [
        new Visualizer({
            filename: '../reports/webpack/statistics-circle-modern.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../reports/webpack/statistics-tree-modern.html',
        }),
    ],
});

const legacyConfig = Object.assign({}, baseConfig, {
    output: {
        filename: '[name]index.js',
        path: __dirname + '/../lib',
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            configureBabelLoader(['> 1%', 'last 2 versions', 'Firefox ESR']),
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    onlyCompileBundledFiles: true,
                    configFile: __dirname + '/../config/typescript/tsconfig.json',
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
        ],
    },
    plugins: [
        new Visualizer({
            filename: '../reports/webpack/statistics-circle-es5.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../reports/webpack/statistics-tree-es5.html',
        }),
    ],
});

const createCompiler = config => {
    const compiler = webpack(config);
    return () => {
        return new Promise((resolve, reject) => {
            compiler.run((err, stats) => {
                if (err) return reject(err);
                console.log(stats.toString({ colors: true }) + '\n');
                resolve();
            });
        });
    };
};

const compileModernBundle = createCompiler(modernConfig);
const compileLegacyBundle = createCompiler(legacyConfig);

module.exports = async () => {
    console.log('Compiling modern bundle...');
    await compileModernBundle();
    console.log('Compiling legacy bundle...');
    await compileLegacyBundle();
};
