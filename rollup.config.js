import path from 'path';
import { readdirSync } from 'fs';
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

const config = [
    {
        input: path.join(process.cwd(), 'src', 'index.ts'),
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
            terser({
                output: {
                    comments: false,
                },
            }),
            visualizer({
                filename: 'reports/stats.html',
            }),
        ],
    },
];

export default config;
