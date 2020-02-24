const images = require('remark-images');
const emoji = require('remark-emoji');

const withMDX = require('@zeit/next-mdx')({
    options: {
        mdPlugins: [images, emoji],
    },
});

const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withFonts(
    withImages(
        withMDX({
            pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
        }),
    ),
);
