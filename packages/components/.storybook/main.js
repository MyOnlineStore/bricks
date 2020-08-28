module.exports = {
    stories: ['../src/**/story.tsx'],
    addons: ['@storybook/addon-knobs', '@storybook/addon-essentials'],
    webpackFinal: config => {
        config.module.rules.push(
            {
                test: /\.(tsx|css)?$/,
                loader: 'babel-loader',
            },
        );

        return config;
    },
};
