const fs = require('fs');
const path = require('path');

const found = [];

const copyReadme = (dir, filter) => {
    if (!fs.existsSync(dir)) {
        throw new Error(`No directory found at ${dir}`);
    }

    const files = fs.readdirSync(dir);

    for (let i = 0; i < files.length; i++) {
        const filename = path.join(dir, files[i]);
        const stat = fs.lstatSync(filename);

        if (stat.isDirectory()) {
            copyReadme(filename, filter);
        } else if (filename.indexOf(filter) >= 0) {
            found.push(filename);
        }
    }

    for (let i = 0; i < found.length; i++) {
        const newPath = found[i].replace('src', 'dist');

        fs.writeFileSync(newPath, fs.readFileSync(found[i]));
    }
};

copyReadme('src', '.mdx');
