const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    return {
        ...config,
        node: {
            fs: 'empty'
        },
        devtool: "source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        },
        devServer: {
            quiet: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader",
                    options: {
                        silent: true,
                        configFileName: './config/typescript/tsconfig.json'
                    }
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                }
            ]
        },
        plugins: [
            ...config.plugins,
            new FriendlyErrorsWebpackPlugin()
        ]
    };
};
