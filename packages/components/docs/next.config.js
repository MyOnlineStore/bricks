const images = require('remark-images');
const emoji = require('remark-emoji');

const withMDX = require('@zeit/next-mdx')({
    options: {
        mdPlugins: [images, emoji],
    },
});

const withImages = require('next-images');

const withCss = require('@zeit/next-css');

const withFonts = require('next-fonts');

module.exports = withCss(
    withFonts(
        withImages(
            withMDX({
                pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
            }),
        ),
    ),
);
