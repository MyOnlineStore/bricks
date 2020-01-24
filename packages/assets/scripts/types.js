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
    let types = ``;

    icons.forEach(file => {
        index += `\nexport { default as ${transformName(file, 'Icon')} } from './icons/${file}';`;
    });

    illustrations.forEach(file => {
        index += `\nexport { default as ${transformName(file, 'Illustration')} } from './illustrations/${file}';`;
    });

    index += '\n';
    types += '\n';

    fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'index.ts'), index);
    fs.writeFileSync(path.resolve(__dirname, '..', 'dist', 'index.d.ts'), types);
}

main();
