module.exports = ({ config }) => {
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.json', '.css');

    // loaders
    // config.module.rules.push({
    //     test: /\.(tsx|css)?$/,
    //     loader: 'babel-loader',
    // });

    return config;
};
