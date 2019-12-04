import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { readdirSync } from 'fs';
import path from 'path';
import external from 'rollup-plugin-auto-external';
import { uglify } from 'rollup-plugin-uglify';

const getDirectories = source => {
    return readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => ({ source, name: dirent.name, path: `${source}/${dirent.name}` }));
};

const getFiles = source => {
    return readdirSync(source, { withFileTypes: true }).map(dirent => ({
        source,
        name: dirent.name,
        path: `${source}/${dirent.name}`,
    }));
};

/**
 * Rollup uses the commonjs plugin to try and resolve named export (id: import { foo } from 'bar').
 * This does not work for every module, react is one of those. So these have to be marked as named
 * exports manually. Hence we import and use Object.keys() to generate the proper named imports.
 */

import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactIs from 'react-is';
import * as propTypes from 'prop-types';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.svg'];
const components = getDirectories(path.join(__dirname, 'src', 'components'));
const icons = getFiles(path.join(__dirname, 'src', 'assets', 'icons'));
const illustrations = getFiles(path.join(__dirname, 'src', 'assets', 'illustrations'));
const output = [{ dir: 'dist/esm', format: 'esm' }, { dir: 'dist/cjs', format: 'cjs' }];

const config = [
    {
        input: components.reduce((input, file) => ({ ...input, [file.name]: file.path }), {}),
        output,
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

            external({
                builtins: false,
                dependencies: false,
                peerDependencies: true,
            }),
            visualizer({
                filename: 'reports/stats.html',
            }),
        ],
    },
];

export default config;
