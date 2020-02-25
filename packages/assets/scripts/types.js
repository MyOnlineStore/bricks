const fs = require('fs');
const path = require('path');
const camelcase = require('camelcase');

const transformName = (file, suffix) => {
    return `${camelcase(file.replace('.svg', ''), { pascalCase: true })}${suffix}`;
};

async function main() {
    const icons = fs.readdirSync(path.resolve(__dirname, '..', 'src', 'icons'));
    const illustrations = fs.readdirSync(path.resolve(__dirname, '..', 'src', 'illustrations'));

    let index = `/// <reference path="../env.d.ts" />\n`;
    let types = `/// <reference types="react" />\nimport { ComponentType, SVGProps } from 'react';\n`;

    icons.forEach(file => {
        const name = transformName(file, 'Icon');
        index += `\nexport { default as ${name} } from './icons/${file}';`;
        types += `\nexport const ${name}: ComponentType<SVGProps<SVGSVGElement>>`;
    });

    illustrations.forEach(file => {
        const name = transformName(file, 'Illustration');
        index += `\nexport { default as ${name} } from './illustrations/${file}';`;
        types += `\nexport const ${name}: ComponentType`;
    });

    index += '\n';
    types += '\n';

    if (!fs.existsSync(path.resolve(__dirname, '..', 'dist'))) {
        fs.mkdirSync(path.resolve(__dirname, '..', 'dist'));
    }

    fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'index.ts'), index);
    fs.writeFileSync(path.resolve(__dirname, '..', 'dist', 'index.d.ts'), types);
}

main();
