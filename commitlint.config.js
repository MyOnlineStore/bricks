module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-case': [0, 'always', 'lower-case'],
        'subject-case': [2, 'always', 'sentence-case'],
    },
};
