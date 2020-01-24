import path from 'path';
import { readdirSync, access } from 'fs';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import peerDepsExternals from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

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

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.svg'];
const components = getDirectories(path.join(__dirname, 'packages', 'components', 'src', 'components'));
const icons = getFiles(path.join(__dirname, 'packages', 'components', 'src', 'assets', 'icons'));
const illustrations = getFiles(path.join(__dirname, 'packages', 'components', 'src', 'assets', 'illustrations'));

const input = [...components].reduce((acc, item) => {
    return { ...acc, [item.name]: item.path };
}, {});

const config = [
    {
        input,
        output: {
            dir: 'dist',
            format: 'esm',
            exports: 'named',
        },
        plugins: [
            babel({
                extensions,
                exclude: 'node_modules/**',
            }),
            resolve({
                extensions,
            }),
            commonjs(),
            peerDepsExternals(),
            terser(),
            visualizer({
                filename: 'reports/stats.html',
            }),
        ],
    },
];

export default config;
