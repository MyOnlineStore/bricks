import graphq from 'rollup-plugin-graph';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

/**
 * Rollup uses the commonjs plugin to try and resolve named export (id: import { foo } from 'bar').
 * This does not work for every module, react is one of those. So these have to be marked as named
 * exports manually. Hence we import and use Object.keys() to generate the proper named imports.
 */

import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactIs from 'react-is';
import * as propTypes from 'prop-types';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = {
    input: 'src/index.ts',
    output: {
        file: 'dist/src/index.js',
        format: 'cjs',
    },
    plugins: [
        babel({
            extensions,
            exclude: 'node_modules/**',
        }),
        resolve({
            extensions,
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                react: Object.keys(react),
                'react-dom': Object.keys(reactDom),
                'react-is': Object.keys(reactIs),
                'prop-types': Object.keys(propTypes),
            },
        }),
        graphq(),
        visualizer(),
    ],
};
