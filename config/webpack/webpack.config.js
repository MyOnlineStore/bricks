module.exports = {
    entry: "./src/index.ts",
    stats: {
        assets: true,
        modules: false,
        children: false,
    },
    output: {
        filename: "index.js",
        path: __dirname + "/../../dist",
        library: 'bricks',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: __dirname + "/../typescript/tsconfig.json",
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
