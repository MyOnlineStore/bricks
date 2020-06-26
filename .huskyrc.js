const config = {
    hooks: {
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
        'pre-push':
            'yarn --frozen-lockfile --ignore-scripts && yarn cs && yarn lint-fix && yarn test --bail && yarn build',
    },
};

module.exports = config;
