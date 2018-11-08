const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
    readdirSync(source)
        .map(name => join(source, name))
        .filter(isDirectory);

const componentEntryPoints = getDirectories(`${__dirname}/../src/components`).map((component, index) => {
    const name = component.substring(component.lastIndexOf('/') + 1);
    const entryPoint = './src/components/' + name;

    return {
        name,
        entryPoint,
    };
});

let entryPoints = {};
componentEntryPoints.forEach(component => {
    entryPoints[component.name] = component.entryPoint;
});

module.exports = entryPoints;
