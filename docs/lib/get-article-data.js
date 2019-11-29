import preval from 'babel-plugin-preval/macro';

/**
 * The preval plugin pre-evaluates code at build time. We use this to create pages for each MDX file.
 */

const articleData = preval`
    module.exports = require('./articles-to-pages.js');
`;

module.exports = articleData;
