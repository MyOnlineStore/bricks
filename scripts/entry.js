const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const noExport = new RegExp('/?_');

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = source =>
    readdirSync(source)
        .map(name => join(source, name))
        .filter(isDirectory);

const createEntryPointsFromFolder = folder => {
    return getDirectories(`${__dirname}/../src/${folder}`)
        .map(directory => {
            const name = folder + '/' + directory.substring(directory.lastIndexOf('/') + 1) + '/';
            const entryPoint = `./src/${name}`;

            return noExport.test(name) ? null : { name, entryPoint };
        })
        .filter(item => item !== null);
};

const srcFolders = getDirectories(__dirname + '/../src')
    .map(directory => {
        const folder = directory.substring(directory.lastIndexOf('/') + 1);

        return noExport.test(folder) ? null : folder;
    })
    .filter(item => item !== null);

let allEntryPoints = {};

srcFolders.forEach(folder => {
    const entryPoints = createEntryPointsFromFolder(folder);

    entryPoints.forEach(entryPoint => {
        allEntryPoints[entryPoint.name] = entryPoint.entryPoint;
    });
});

module.exports = allEntryPoints;
