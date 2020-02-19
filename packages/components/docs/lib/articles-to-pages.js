const fs = require('fs');
const path = require('path');

//Define the docs dir and the dir for the generated pages
const docsDir = path.join(process.cwd(), './markdown/');
const generatedDir = path.join(process.cwd(), './pages/generated/');

//Make generated dir if it doesn't exist
if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir);
}

//Function to create the contents of a generated page file
const createPage = (path, dirName) => {
    return `
    import React, { FC } from 'react';
        import Document from '${path}';
        import componentMap from '../../../lib/componentMap';
        import GeneratedPage from '../../../components/GeneratedPage';

        const Components: FC = () => {
            return (
                <GeneratedPage dirName={'${dirName}'}>
                    <Document components={componentMap} />
                </GeneratedPage>
            );
        };

        export default Components;
    `;
};

//Get an array of folders inside the docs directory
console.log('Getting directories...');
const srcDirs = fs.readdirSync(docsDir).filter(file => fs.lstatSync(path.join(docsDir, file)).isDirectory());
console.log(srcDirs);

//Create an object with articles for each folder
const articles = srcDirs.map((dir, index) => {
    const srcDir = path.join(docsDir, dir);
    const destDir = path.join(generatedDir, dir);
    console.log(`\nGetting pages from ${dir}...`);

    //Read .mdx files from directory
    const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

    //Create destination directory if it doesn't exist
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
    }

    //Generate the pages
    files.forEach(file => {
        const filePath = path.join(srcDir, file);
        console.log(`Reading path: ${filePath}...`);

        // const content = fs.readFileSync(filePath, 'utf-8');

        const writePath = path.join(destDir, file.replace(/\.mdx?$/, '.tsx'));

        console.debug(`Writing path: ${writePath}...`);

        try {
            if (fs.existsSync(writePath)) {
                fs.unlinkSync(writePath);
            }
            fs.writeFileSync(`${writePath}`, createPage(filePath, dir));
        } catch (e) {
            console.log('Cannot write file ', e);
        }
    });
    return {
        dir,
        files,
    };
});

module.exports = { srcDirs, articles };
